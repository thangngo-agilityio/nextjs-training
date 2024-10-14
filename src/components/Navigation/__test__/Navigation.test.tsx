// Unit tests for: Navigation

import { logout } from '@/actions';
import { ROUTER } from '@/constants';
import { useBreakpointValue } from '@chakra-ui/react';
import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import Navigation from '../index';
import '@testing-library/jest-dom';

// Mock components and hooks
jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useBreakpointValue: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/actions', () => ({
  logout: jest.fn(),
}));

jest.mock('../../UserDropdown', () => ({
  __esModule: true,
  default: ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick}>MockUserDropdown</button>
  ),
}));

jest.mock('..', () => ({
  Expand: ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick}>Expand</button>
  ),
  LoadingIndicator: () => <div>Loading...</div>,
}));

jest.mock('@/icons', () => ({
  CartIcon: () => <div>CartIcon</div>,
  HeartIcon: () => <div>HeartIcon</div>,
}));

describe('Navigation() Navigation method', () => {
  let mockRouterPush: jest.Mock;
  let mockStartTransition: jest.Mock;

  beforeEach(() => {
    mockRouterPush = jest.fn();
    mockStartTransition = jest.fn((callback) => callback());

    (useRouter as jest.Mock).mockReturnValue({
      push: mockRouterPush,
    });
  });

  it('Should match snapshot for Navigation', () => {
    const { container } = render(<Navigation />);

    expect(container).toMatchSnapshot();
  });

  describe('Happy Path', () => {
    it('should render desktop navigation with icons and user dropdown', () => {
      (useBreakpointValue as jest.Mock).mockReturnValue(false);

      render(<Navigation />);

      expect(screen.getByText('HeartIcon')).toBeInTheDocument();
      expect(screen.getByText('CartIcon')).toBeInTheDocument();
      expect(screen.getByText('MockUserDropdown')).toBeInTheDocument();
    });

    it('should render mobile navigation with expand button', () => {
      (useBreakpointValue as jest.Mock).mockReturnValue(true);

      render(<Navigation />);

      expect(screen.getByText('Expand')).toBeInTheDocument();
    });

    it('should call logout and redirect to login on logout click', async () => {
      (useBreakpointValue as jest.Mock).mockReturnValue(false);

      render(<Navigation />);

      fireEvent.click(screen.getByText('MockUserDropdown'));

      expect(logout).toHaveBeenCalled();
      expect(mockRouterPush).toHaveBeenCalledWith(ROUTER.LOGIN);
    });
  });

  describe('Edge Cases', () => {
    it('should show loading indicator when isLogout is true', () => {
      (useBreakpointValue as jest.Mock).mockReturnValue(false);
      (useTransition as jest.Mock).mockReturnValue([true, mockStartTransition]);

      render(<Navigation />);

      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should handle transition errors gracefully', async () => {
      (useBreakpointValue as jest.Mock).mockReturnValue(false);
      mockStartTransition.mockImplementationOnce(() => {
        throw new Error('Transition Error');
      });

      render(<Navigation />);

      fireEvent.click(screen.getByText('MockUserDropdown'));

      expect(logout).toHaveBeenCalled();
      expect(mockRouterPush).not.toHaveBeenCalled();
    });
  });
});

// End of unit tests for: Navigation
