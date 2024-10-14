import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TotalCart from '../index';
import '@testing-library/jest-dom';

// Mock the formatAmountNumber function
jest.mock('@/utils', () => ({
  formatAmountNumber: jest.fn((amount) => amount),
}));

describe('TotalCart() TotalCart method', () => {
  const total = 1000;
  const isDisable = false;
  const onClick = jest.fn();
  it('should match snapshot for TotalCart', () => {
    const { container } = render(
      <TotalCart total={total} isDisable={isDisable} onClick={onClick} />,
    );

    expect(container).toMatchSnapshot();
  });
  describe('Happy Path', () => {
    it('should render the total amount correctly', () => {
      // Arrange

      // Act
      render(
        <TotalCart total={total} isDisable={isDisable} onClick={onClick} />,
      );

      // Assert
      expect(screen.getByText('Total:')).toBeInTheDocument();
      expect(screen.getByText(`N${total}`)).toBeInTheDocument();
    });

    it('should render the checkout button enabled when isDisable is false', () => {
      // Arrange
      const total = 1000;
      const isDisable = false;
      const onClick = jest.fn();

      // Act
      render(
        <TotalCart total={total} isDisable={isDisable} onClick={onClick} />,
      );

      // Assert
      const button = screen.getByRole('button', { name: /checkout/i });
      expect(button).toBeEnabled();
    });

    it('should call onClick handler when checkout button is clicked', () => {
      // Arrange
      const total = 1000;
      const isDisable = false;
      const onClick = jest.fn();

      // Act
      render(
        <TotalCart total={total} isDisable={isDisable} onClick={onClick} />,
      );
      const button = screen.getByRole('button', { name: /checkout/i });
      fireEvent.click(button);

      // Assert
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Edge Cases', () => {
    it('should render the checkout button disabled when isDisable is true', () => {
      // Arrange
      const total = 1000;
      const isDisable = true;
      const onClick = jest.fn();

      // Act
      render(
        <TotalCart total={total} isDisable={isDisable} onClick={onClick} />,
      );

      // Assert
      const button = screen.getByRole('button', { name: /checkout/i });
      expect(button).toBeDisabled();
    });

    it('should handle zero total amount gracefully', () => {
      // Arrange
      const total = 0;
      const isDisable = false;
      const onClick = jest.fn();

      // Act
      render(
        <TotalCart total={total} isDisable={isDisable} onClick={onClick} />,
      );

      // Assert
      expect(screen.getByText('Total:')).toBeInTheDocument();
      expect(screen.getByText('N0')).toBeInTheDocument();
    });

    it('should handle negative total amount gracefully', () => {
      // Arrange
      const total = -100;
      const isDisable = false;
      const onClick = jest.fn();

      // Act
      render(
        <TotalCart total={total} isDisable={isDisable} onClick={onClick} />,
      );

      // Assert
      expect(screen.getByText('Total:')).toBeInTheDocument();
      expect(screen.getByText('N-100')).toBeInTheDocument();
    });
  });
});
