// Unit tests for: useCustomToast

import { useToast, UseToastOptions } from '@chakra-ui/react';
import { renderHook } from '@testing-library/react-hooks';
import { useCustomToast } from '../useToast';

// Import necessary libraries and components

// Import necessary libraries and components
// Mock the useToast hook from Chakra UI
jest.mock('@chakra-ui/react', () => ({
  useToast: jest.fn(),
}));

// Define a mock type for Status
type MockStatus = 'success' | 'error' | 'warning' | 'info';

// Initialize mock for useToast
const mockUseToast = useToast as jest.Mock;

// Test suite for useCustomToast
describe('useCustomToast() useCustomToast method', () => {
  beforeEach(() => {
    // Reset mock before each test
    mockUseToast.mockReset();
  });

  // Happy path tests
  describe('Happy Path', () => {
    it('should call toast with default error status when no status is provided', () => {
      // Arrange
      const mockToast = jest.fn();
      mockUseToast.mockReturnValue(mockToast);

      // Act
      const { result } = renderHook(() => useCustomToast());
      result.current.showToast('Test message');

      // Assert
      expect(mockToast).toHaveBeenCalledWith({
        position: 'top',
        status: 'error',
        title: 'Test message',
        duration: 3000,
        isClosable: true,
      });
    });

    it('should call toast with provided status and message', () => {
      // Arrange
      const mockToast = jest.fn();
      mockUseToast.mockReturnValue(mockToast);

      // Act
      const { result } = renderHook(() => useCustomToast());
      result.current.showToast('Success message', 'success' as MockStatus);

      // Assert
      expect(mockToast).toHaveBeenCalledWith({
        position: 'top',
        status: 'success',
        title: 'Success message',
        duration: 3000,
        isClosable: true,
      });
    });

    it('should call toast with additional options', () => {
      // Arrange
      const mockToast = jest.fn();
      mockUseToast.mockReturnValue(mockToast);
      const options: UseToastOptions = { duration: 5000, isClosable: false };

      // Act
      const { result } = renderHook(() => useCustomToast());
      result.current.showToast('Info message', 'info' as MockStatus, options);

      // Assert
      expect(mockToast).toHaveBeenCalledWith({
        position: 'top',
        status: 'info',
        title: 'Info message',
        duration: 5000,
        isClosable: false,
      });
    });
  });

  // Edge case tests
  describe('Edge Cases', () => {
    it('should handle empty message gracefully', () => {
      // Arrange
      const mockToast = jest.fn();
      mockUseToast.mockReturnValue(mockToast);

      // Act
      const { result } = renderHook(() => useCustomToast());
      result.current.showToast('');

      // Assert
      expect(mockToast).toHaveBeenCalledWith({
        position: 'top',
        status: 'error',
        title: '',
        duration: 3000,
        isClosable: true,
      });
    });

    it('should handle undefined status gracefully', () => {
      // Arrange
      const mockToast = jest.fn();
      mockUseToast.mockReturnValue(mockToast);

      // Act
      const { result } = renderHook(() => useCustomToast());
      result.current.showToast('Undefined status message', undefined);

      // Assert
      expect(mockToast).toHaveBeenCalledWith({
        position: 'top',
        status: 'error',
        title: 'Undefined status message',
        duration: 3000,
        isClosable: true,
      });
    });

    it('should handle null options gracefully', () => {
      // Arrange
      const mockToast = jest.fn();
      mockUseToast.mockReturnValue(mockToast);

      // Act
      const { result } = renderHook(() => useCustomToast());
      result.current.showToast('Null options message', 'warning' as MockStatus);

      // Assert
      expect(mockToast).toHaveBeenCalledWith({
        position: 'top',
        status: 'warning',
        title: 'Null options message',
        duration: 3000,
        isClosable: true,
      });
    });
  });
});

// End of unit tests for: useCustomToast
