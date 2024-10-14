import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

// Components
import UserDropdown from '../index';

// Mocking the dependencies
jest.mock('@chakra-ui/react', () => ({
  Menu: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  MenuButton: ({ children }: { children: React.ReactNode }) => (
    <button>{children}</button>
  ),
  MenuItem: ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick: () => void;
  }) => <div onClick={onClick}>{children}</div>,
  MenuList: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock('../../common', () => ({
  Avatar: ({ src, alt }: { src?: string; alt?: string }) => (
    <img src={src} alt={alt} />
  ),
}));

jest.mock('@/icons', () => ({
  Logout: () => <svg>Logout Icon</svg>,
}));

describe('UserDropdown() UserDropdown method', () => {
  // Arrange
  const src = 'avatar.png';
  const alt = 'User Avatar';
  const onClick = jest.fn();
  it('should match snapshot for UserDropdown', () => {
    const { container } = render(
      <UserDropdown src={src} alt={alt} onClick={onClick} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render the Avatar with the correct src and alt attributes', () => {
    // Act
    render(<UserDropdown src={src} alt={alt} onClick={onClick} />);

    // Assert
    const avatar = screen.getByAltText(alt);
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', src);
  });

  it('should call onClick when the Logout menu item is clicked', () => {
    // Arrange
    const onClick = jest.fn();

    // Act
    render(<UserDropdown onClick={onClick} />);
    const logoutItem = screen.getByText('Logout');
    fireEvent.click(logoutItem);

    // Assert
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
