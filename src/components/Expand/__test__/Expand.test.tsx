import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ExpandSidebar from '../index';
import '@testing-library/jest-dom';

describe('ExpandSidebar() ExpandSidebar method', () => {
  it('should match snapshot for Expand', () => {
    const { container } = render(<ExpandSidebar />);

    expect(container).toMatchSnapshot();
  });

  // Happy Path Tests
  describe('Happy Path', () => {
    it('should call the onClick prop when the logout button is clicked', () => {
      const mockOnClick = jest.fn();

      // Render the component with the mock onClick function
      render(<ExpandSidebar onClick={mockOnClick} />);

      // Open the drawer
      const hamburgerButton = screen.getByTestId('button-hamburger');
      fireEvent.click(hamburgerButton);

      // Click the logout button
      const logoutButton = screen.getByTestId('button-logout');
      fireEvent.click(logoutButton);

      // Check if the mock function was called
      expect(mockOnClick).toHaveBeenCalled();
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('should handle the absence of onClick prop gracefully', () => {
      // Render the component without the onClick prop
      render(<ExpandSidebar />);

      // Open the drawer
      const hamburgerButton = screen.getByTestId('button-hamburger');
      fireEvent.click(hamburgerButton);

      // Click the logout button
      const logoutButton = screen.getByTestId('button-logout');
      fireEvent.click(logoutButton);

      // No errors should occur, and the test should pass
    });
  });
});
