// Unit tests for: SignUpForm

import React from 'react';
import { AUTH_SCHEMA } from '@/constants';
import { TUser } from '@/types';
import { fireEvent, render, screen } from '@testing-library/react';
import SignUpForm from '../SignUp';
import '@testing-library/jest-dom';

// Mocking necessary dependencies
type MockTAuthFormProps = {
  isDisabled?: boolean;
  errorMessage?: string;
  handleClearRootError?: jest.Mock;
  onSubmit: jest.Mock;
};

describe('SignUpForm() SignUpForm method', () => {
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
    it('should render the form with all fields and submit button', () => {
      render(<SignUpForm {...mockProps} />);

      expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Confirm password/i)).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /Sign Up/i }),
      ).toBeInTheDocument();
    });

    it('should call onSubmit with correct data when form is submitted', async () => {
      render(<SignUpForm {...mockProps} />);

      fireEvent.change(screen.getByLabelText(/Email/i), {
        target: { value: 'test@example.com' },
      });
      fireEvent.change(screen.getByLabelText(/First Name/i), {
        target: { value: 'John' },
      });
      fireEvent.change(screen.getByLabelText(/Last Name/i), {
        target: { value: 'Doe' },
      });
      fireEvent.change(screen.getByLabelText(/Password/i), {
        target: { value: 'password123' },
      });
      fireEvent.change(screen.getByLabelText(/Confirm password/i), {
        target: { value: 'password123' },
      });

      fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

      expect(mockProps.onSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
        password: 'password123',
        confirmPassword: 'password123',
      } as unknown as TUser);
    });
  });

  describe('Edge Cases', () => {
    it('should display error message when email is invalid', async () => {
      render(<SignUpForm {...mockProps} />);

      fireEvent.change(screen.getByLabelText(/Email/i), {
        target: { value: 'invalid-email' },
      });
      fireEvent.blur(screen.getByLabelText(/Email/i));

      expect(
        await screen.findByText(AUTH_SCHEMA.EMAIL.required),
      ).toBeInTheDocument();
    });

    it('should disable submit button when isDisabled is true', () => {
      mockProps.isDisabled = true;
      render(<SignUpForm {...mockProps} />);

      expect(screen.getByRole('button', { name: /Sign Up/i })).toBeDisabled();
    });

    it('should clear error message on input change', () => {
      render(<SignUpForm {...mockProps} />);

      fireEvent.change(screen.getByLabelText(/Email/i), {
        target: { value: 'invalid-email' },
      });
      fireEvent.blur(screen.getByLabelText(/Email/i));

      fireEvent.change(screen.getByLabelText(/Email/i), {
        target: { value: 'test@example.com' },
      });

      expect(mockProps.handleClearRootError).toHaveBeenCalled();
    });
  });
});

// End of unit tests for: SignUpForm
