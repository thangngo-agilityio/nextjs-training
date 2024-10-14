// Unit tests for: ProductCard

import { formatAmountNumber } from '@/utils';
import { render } from '@testing-library/react';
import React from 'react';
import ProductCard from '../index';
import '@testing-library/jest-dom';

// Mocking the dependencies
jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} />
));
jest.mock('@/icons', () => ({
  HeartIcon: () => <svg data-testid="heart-icon" />,
}));
jest.mock('@/utils', () => ({
  formatAmountNumber: jest.fn((price: string) => price),
}));
jest.mock(
  'next/link',
  () =>
    ({ children, href }: { children: React.ReactNode; href: string }) => (
      <a href={href}>{children}</a>
    ),
);
jest.mock('@/constants', () => ({
  ROUTER: { PRODUCT_DETAIL_PAGE: (id: string) => `/product/${id}` },
}));

describe('ProductCard() ProductCard method', () => {
  const product = {
    id: '1',
    image: '/path/to/image.jpg',
    title: 'Sample Product',
    price: 1000,
  };
  it('', () => {
    const { container } = render(<ProductCard {...product} />);

    expect(container).toMatchSnapshot();
  });

  // Happy Path Tests
  describe('Happy Path', () => {
    it('should render the product card with correct details', () => {
      // Act
      const { getByText, getByAltText, getByTestId } = render(
        <ProductCard {...product} />,
      );

      // Assert
      expect(getByAltText('Sample Product')).toHaveAttribute(
        'src',
        '/path/to/image.jpg',
      );
      expect(getByText('Sample Product')).toBeInTheDocument();
      expect(getByText('N1000')).toBeInTheDocument();
      expect(getByTestId('heart-icon')).toBeInTheDocument();
    });

    it('should link to the correct product detail page', () => {
      // Arrange
      const product = {
        id: '1',
        image: '/path/to/image.jpg',
        title: 'Sample Product',
        price: 1000,
      };

      // Act
      const { container } = render(<ProductCard {...product} />);
      const link = container.querySelector('a');

      // Assert
      expect(link).toHaveAttribute('href', '/product/1');
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('should handle a product with a very long title gracefully', () => {
      // Arrange
      const product = {
        id: '1',
        image: '/path/to/image.jpg',
        title: 'This is a very long product title that should be truncated',
        price: 1000,
      };

      // Act
      const { getByText } = render(<ProductCard {...product} />);

      // Assert
      expect(
        getByText('This is a very long product title that should be truncated'),
      ).toBeInTheDocument();
    });

    it('should format the price correctly using formatAmountNumber', () => {
      // Arrange
      const product = {
        id: '1',
        image: '/path/to/image.jpg',
        title: 'Sample Product',
        price: 1000,
      };

      // Act
      render(<ProductCard {...product} />);

      // Assert
      expect(formatAmountNumber).toHaveBeenCalledWith('1000');
    });

    it('should render without crashing when image is missing', () => {
      // Arrange
      const product = {
        id: '1',
        image: '',
        title: 'Sample Product',
        price: 1000,
      };

      // Act
      const { getByAltText } = render(<ProductCard {...product} />);

      // Assert
      expect(getByAltText('Sample Product')).toHaveAttribute('src', '');
    });
  });
});

// End of unit tests for: ProductCard
