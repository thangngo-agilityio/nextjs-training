import React from 'react';
import { formatAmountNumber } from '@/utils';
import { fireEvent, render, screen } from '@testing-library/react';
import CartItem from '../index';
import '@testing-library/jest-dom';

// Mock the formatAmountNumber utility function
jest.mock('@/utils', () => ({
  formatAmountNumber: jest.fn((amount) => amount),
}));

// Mock the DeleteIcon component
jest.mock('@/icons', () => ({
  DeleteIcon: () => <svg data-testid="delete-icon" />,
}));

describe('CartItem() CartItem method', () => {
  const defaultProps = {
    id: '1',
    title: 'Sample Item',
    image: ['https://sample-image.jpg'],
    description: 'This is a sample item description.',
    price: 1000,
    quantity: 2,
    onRemoveItem: jest.fn(),
  };

  it('should match snapshot for CartItem', () => {
    const { container } = render(<CartItem {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });

  describe('Happy Path', () => {
    it('should render the CartItem with all provided props', () => {
      // Render the CartItem component
      render(<CartItem {...defaultProps} />);

      // Check if the title is rendered
      expect(screen.getByText('Sample Item')).toBeInTheDocument();

      // Check if the description is rendered
      expect(
        screen.getByText('This is a sample item description.'),
      ).toBeInTheDocument();

      // Check if the image is rendered
      const image = screen.getByAltText('Sample Item');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute(
        'src',
        '/_next/image?url=https%3A%2F%2Fsample-image.jpg&w=750&q=75',
      );

      // Check if the price is formatted and rendered
      expect(formatAmountNumber).toHaveBeenCalledWith('1000');
      expect(screen.getByText('N1000')).toBeInTheDocument();

      // Check if the quantity is rendered
      expect(screen.getByText('2')).toBeInTheDocument();
    });

    it('should call onRemoveItem when the delete icon is clicked', () => {
      // Render the CartItem component
      render(<CartItem {...defaultProps} />);

      // Click the delete icon
      fireEvent.click(screen.getByTestId('delete-icon'));

      // Check if onRemoveItem is called with the correct id
      expect(defaultProps.onRemoveItem).toHaveBeenCalledWith('1');
    });
  });

  describe('Edge Cases', () => {
    it('should handle missing onRemoveItem gracefully', () => {
      // Render the CartItem component without onRemoveItem
      render(<CartItem {...defaultProps} onRemoveItem={undefined} />);

      // Click the delete icon
      fireEvent.click(screen.getByTestId('delete-icon'));

      // Check if onRemoveItem is not called
      expect(defaultProps.onRemoveItem).not.toHaveBeenCalled();
    });

    it('should render with a price of 0', () => {
      // Render the CartItem component with a price of 0
      render(<CartItem {...defaultProps} price={0} />);

      // Check if the price is formatted and rendered
      expect(formatAmountNumber).toHaveBeenCalledWith('0');
      expect(screen.getByText('N0')).toBeInTheDocument();
    });
  });
});
