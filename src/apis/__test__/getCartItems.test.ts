import { auth } from '@/configs';
import { API_PATH } from '@/constants';
import { getCart } from '@/service';
import { formatUrlWithQuery } from '@/utils';
import { getCartItems } from '../cart';

// Import necessary modules and functions
// Mock the dependencies
jest.mock('@/service', () => ({
  getCart: jest.fn(),
}));

jest.mock('@/utils', () => ({
  formatUrlWithQuery: jest.fn(),
}));

jest.mock('@/configs', () => ({
  auth: jest.fn(),
}));

describe('getCartItems() getCartItems method', () => {
  // Happy path tests
  describe('Happy Path', () => {});

  // Edge case tests
  describe('Edge Cases', () => {
    it('should return an empty cart object if no carts are found', async () => {
      // Arrange
      const mockSession = { user: { id: '123' } };
      (auth as jest.Mock).mockResolvedValue(mockSession);
      (formatUrlWithQuery as jest.Mock).mockReturnValue('formatted-url');
      (getCart as jest.Mock).mockResolvedValue({ data: [] });

      // Act
      const result = await getCartItems();

      // Assert
      expect(result).toEqual({ data: {} });
    });

    it('should handle the case where the user session is null', async () => {
      // Arrange
      (auth as jest.Mock).mockResolvedValue(null);
      (formatUrlWithQuery as jest.Mock).mockReturnValue('formatted-url');
      (getCart as jest.Mock).mockResolvedValue({ data: [] });

      // Act
      const result = await getCartItems();

      // Assert
      expect(formatUrlWithQuery).toHaveBeenCalledWith(API_PATH.CARTS, {
        userId: '',
      });
      expect(result).toEqual({ data: {} });
    });

    it('should throw an error if the getCart service fails', async () => {
      // Arrange
      const mockSession = { user: { id: '123' } };
      const error = new Error('Service failure');
      (auth as jest.Mock).mockResolvedValue(mockSession);
      (formatUrlWithQuery as jest.Mock).mockReturnValue('formatted-url');
      (getCart as jest.Mock).mockRejectedValue(error);

      // Act & Assert
      await expect(getCartItems()).rejects.toThrow('Service failure');
    });
  });
});
