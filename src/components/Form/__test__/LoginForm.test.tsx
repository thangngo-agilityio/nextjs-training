// Unit tests for: LoginForm

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from '../Login';
import '@testing-library/jest-dom';

// Mocking necessary dependencies
type MockTAuthFormProps = {
  isDisabled?: boolean;
  errorMessage?: string;
  handleClearRootError?: jest.Mock;
  onSubmit: jest.Mock;
};

describe('LoginForm() LoginForm method', () => {
  let mockProps: MockTAuthFormProps;

  beforeEach(() => {
    mockProps = {
      isDisabled: false,
      errorMessage: '',
      handleClearRootError: jest.fn(),
      onSubmit: jest.fn(),
    };
  });

  describe('Happy Path', () => {
    it('should render the LoginForm component correctly', () => {
      render(<LoginForm {...mockProps} />);
      expect(
        screen.getByRole('heading', { name: /Welcome Back!/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /SIGN IN/i }),
      ).toBeInTheDocument();
    });

    it('should call onSubmit with correct data when form is submitted', () => {
      render(<LoginForm {...mockProps} />);
      const emailInput = screen.getByLabelText(/Email/i);
      const passwordInput = screen.getByLabelText(/Your password/i);
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.click(submitButton);

      expect(mockProps.onSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
    });
  });

  describe('Edge Cases', () => {
    it('should display error message when errorMessage prop is provided', () => {
      mockProps.errorMessage = 'Invalid credentials';
      render(<LoginForm {...mockProps} />);
      expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
    });

    it('should disable the form when isDisabled prop is true', () => {
      mockProps.isDisabled = true;
      render(<LoginForm {...mockProps} />);
      const emailInput = screen.getByLabelText(/Email/i);
      const passwordInput = screen.getByLabelText(/Your password/i);
      const submitButton = screen.getByRole('button', { name: /SIGN IN/i });

      expect(emailInput).toBeDisabled();
      expect(passwordInput).toBeDisabled();
      expect(submitButton).toBeDisabled();
    });

    it('should clear error message on input change', () => {
      render(<LoginForm {...mockProps} />);
      const emailInput = screen.getByLabelText(/Email/i);

      fireEvent.change(emailInput, { target: { value: 'new@example.com' } });
      expect(mockProps.handleClearRootError).toHaveBeenCalled();
    });
  });
});

// End of unit tests for: LoginForm
