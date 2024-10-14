import { API_PATH, ERROR_MESSAGES } from '@/constants';
import { patchCart, postCart } from '@/service';
import { revalidateTag } from 'next/cache';
import { createCart, updateMyCart } from '../cart';

// Mocking the dependencies
jest.mock('@/service', () => ({
  postCart: jest.fn(),
  patchCart: jest.fn(),
}));

jest.mock('next/cache', () => ({
  revalidateTag: jest.fn(),
}));

// Mock ICartItem type
type MockICartItem = {
  id: string;
  quantity: number;
  price: number;
};

describe('Cart action', () => {
  describe('createCart() createCart method', () => {
    const mockUserId = 'user123';
    const mockCartItems: MockICartItem[] = [
      { id: 'item1', quantity: 2, price: 100 },
      { id: 'item2', quantity: 1, price: 200 },
    ];

    beforeEach(() => {
      jest.clearAllMocks();
    });

    // Happy path test
    it('should successfully create a cart and revalidate the cache', async () => {
      // Arrange
      (postCart as jest.Mock).mockResolvedValue(undefined);

      // Act
      const result = await createCart(mockCartItems, mockUserId);

      // Assert
      expect(postCart).toHaveBeenCalledWith(API_PATH.CARTS, {
        userId: mockUserId,
        cartItems: mockCartItems,
      });
      expect(revalidateTag).toHaveBeenCalledWith(API_PATH.CARTS);
      expect(result).toBeUndefined();
    });

    // Edge case: Empty cart items
    it('should handle empty cart items gracefully', async () => {
      // Arrange
      const emptyCartItems: MockICartItem[] = [];
      (postCart as jest.Mock).mockResolvedValue(undefined);

      // Act
      const result = await createCart(emptyCartItems, mockUserId);

      // Assert
      expect(postCart).toHaveBeenCalledWith(API_PATH.CARTS, {
        userId: mockUserId,
        cartItems: emptyCartItems,
      });
      expect(revalidateTag).toHaveBeenCalledWith(API_PATH.CARTS);
      expect(result).toBeUndefined();
    });

    // Edge case: Error during cart creation
    it('should return an error message if postCart throws an error', async () => {
      // Arrange
      (postCart as jest.Mock).mockRejectedValue(
        new Error('Network error') as never,
      );

      // Act
      const result = await createCart(mockCartItems, mockUserId);

      // Assert
      expect(postCart).toHaveBeenCalledWith(API_PATH.CARTS, {
        userId: mockUserId,
        cartItems: mockCartItems,
      });
      expect(revalidateTag).not.toHaveBeenCalled();
      expect(result).toEqual({ error: ERROR_MESSAGES.CREATE_CART });
    });
  });

  describe('updateMyCart() updateMyCart method', () => {
    const mockCartId = '12345';
    const mockCartItems: MockICartItem[] = [
      { id: 'item1', quantity: 2, price: 100 },
      { id: 'item2', quantity: 1, price: 200 },
    ];

    beforeEach(() => {
      jest.clearAllMocks();
    });

    // Happy path test
    it('should successfully update the cart and revalidate the cache', async () => {
      // Arrange
      (patchCart as jest.Mock).mockResolvedValue(undefined as never);

      // Act
      const result = await updateMyCart(mockCartId, mockCartItems);

      // Assert
      expect(patchCart).toHaveBeenCalledWith(
        `${API_PATH.CARTS}/${mockCartId}`,
        {
          cartItems: mockCartItems,
        },
      );
      expect(revalidateTag).toHaveBeenCalledWith(API_PATH.CARTS);
      expect(result).toBeUndefined();
    });

    // Edge case: patchCart throws an error
    it('should return an error message when patchCart fails', async () => {
      // Arrange
      (patchCart as jest.Mock).mockRejectedValue(
        new Error('Network Error') as never,
      );

      // Act
      const result = await updateMyCart(mockCartId, mockCartItems);

      // Assert
      expect(patchCart).toHaveBeenCalledWith(
        `${API_PATH.CARTS}/${mockCartId}`,
        {
          cartItems: mockCartItems,
        },
      );
      expect(revalidateTag).not.toHaveBeenCalled();
      expect(result).toEqual({ error: ERROR_MESSAGES.UPDATE_CART });
    });

    // Edge case: empty cartItems array
    it('should handle an empty cartItems array gracefully', async () => {
      // Arrange
      const emptyCartItems: MockICartItem[] = [];
      (patchCart as jest.Mock).mockResolvedValue(undefined as never);

      // Act
      const result = await updateMyCart(mockCartId, emptyCartItems);

      // Assert
      expect(patchCart).toHaveBeenCalledWith(
        `${API_PATH.CARTS}/${mockCartId}`,
        {
          cartItems: emptyCartItems,
        },
      );
      expect(revalidateTag).toHaveBeenCalledWith(API_PATH.CARTS);
      expect(result).toBeUndefined();
    });

    // Edge case: invalid cartId
    it('should handle an invalid cartId gracefully', async () => {
      // Arrange
      const invalidCartId = '';
      (patchCart as jest.Mock).mockResolvedValue(undefined as never);

      // Act
      const result = await updateMyCart(invalidCartId, mockCartItems);

      // Assert
      expect(patchCart).toHaveBeenCalledWith(
        `${API_PATH.CARTS}/${invalidCartId}`,
        { cartItems: mockCartItems },
      );
      expect(revalidateTag).toHaveBeenCalledWith(API_PATH.CARTS);
      expect(result).toBeUndefined();
    });
  });
});
