import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ProductInfo from '../index';
import '@testing-library/jest-dom';

// Mocking formatAmountNumber utility
jest.mock('@/utils', () => ({
  formatAmountNumber: jest.fn((price: string) => `formatted-${price}`),
}));

describe('ProductInfo() ProductInfo method', () => {
  const mockOnClickBuy = jest.fn();
  const mockOnClickAddCard = jest.fn();

  const defaultProps = {
    title: 'Test Product',
    price: 1000,
    description: 'Test Description',
    onClickBuy: mockOnClickBuy,
    onClickAddCard: mockOnClickAddCard,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot for ProductInfo', () => {
    const { container } = render(<ProductInfo {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });

  describe('Happy Path', () => {
    it('should render the product title, description, and formatted price', () => {
      render(<ProductInfo {...defaultProps} />);

      expect(screen.getByText('Test Product')).toBeInTheDocument();
      expect(screen.getByText('Test Description')).toBeInTheDocument();
      expect(screen.getByText('Nformatted-1000')).toBeInTheDocument();
    });

    it('should increment quantity when increment button is clicked', () => {
      render(<ProductInfo {...defaultProps} />);

      const incrementButton = screen.getByTestId('btn-increment');
      fireEvent.click(incrementButton);

      expect(screen.getByText('2')).toBeInTheDocument();
    });

    it('should decrement quantity when decrement button is clicked', () => {
      render(<ProductInfo {...defaultProps} />);

      const incrementButton = screen.getByTestId('btn-increment');
      fireEvent.click(incrementButton); // Increment to 2

      const decrementButton = screen.getByTestId('btn-decrement');
      fireEvent.click(decrementButton); // Decrement back to 1

      expect(screen.getByText('1')).toBeInTheDocument();
    });

    it('should call onClickBuy when Buy now button is clicked', () => {
      render(<ProductInfo {...defaultProps} />);

      const buyButton = screen.getByText('Buy now');
      fireEvent.click(buyButton);

      expect(mockOnClickBuy).toHaveBeenCalled();
    });

    it('should call onClickAddCard when Add to cart button is clicked', () => {
      render(<ProductInfo {...defaultProps} />);

      const addToCartButton = screen.getByText('Add to cart');
      fireEvent.click(addToCartButton);

      expect(mockOnClickAddCard).toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    it('should disable decrement button when quantity is 1', () => {
      render(<ProductInfo {...defaultProps} />);

      const decrementButton = screen.getByTestId('btn-decrement');
      expect(decrementButton).toBeDisabled();
    });

    it('should handle missing description gracefully', () => {
      const propsWithoutDescription = {
        ...defaultProps,
        description: undefined,
      };
      render(<ProductInfo {...propsWithoutDescription} />);

      expect(screen.queryByText('Test Description')).not.toBeInTheDocument();
    });

    it('should handle missing price gracefully', () => {
      const propsWithoutPrice = { ...defaultProps, price: 0 };
      render(<ProductInfo {...propsWithoutPrice} />);

      expect(screen.queryByText('Nformatted-')).not.toBeInTheDocument();
    });
  });
});
