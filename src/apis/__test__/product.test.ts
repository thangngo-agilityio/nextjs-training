// Service
import { httpClient } from '@/service';

// Apis
import { getProductDetail, getProducts } from '../product';

// Constants
import { API_PATH, QUERY_TAGS } from '@/constants';

// Utils
import { formatUrlWithQuery } from '@/utils';

// Types
import { TProduct } from '@/types';

// Import necessary modules and dependencies
// Mock the httpClient
jest.mock('@/service', () => ({
  httpClient: {
    getRequest: jest.fn(),
  },
}));

jest.mock('@/utils', () => ({
  formatUrlWithQuery: jest.fn(),
}));

describe('Product api', () => {
  describe('getProductDetail() getProductDetail method', () => {
    // Happy Path Tests
    describe('Happy Path', () => {});

    // Edge Case Tests
    describe('Edge Cases', () => {
      it('should return an error object when the httpClient throws an error', async () => {
        // Arrange: Set up the mock to throw an error
        const mockError = new Error('Network Error');
        (httpClient.getRequest as jest.Mock).mockRejectedValueOnce(mockError);

        // Act: Call the function
        const result = await getProductDetail('123');

        // Assert: Verify the result
        expect(result).toEqual({ error: mockError });
      });
      it('should handle a non-existent product ID', async () => {
        // Arrange: Set up the mock response for a non-existent product
        (httpClient.getRequest as jest.Mock).mockResolvedValueOnce({
          data: null,
        });

        // Act: Call the function with a non-existent ID
        const result = await getProductDetail('non-existent-id');

        // Assert: Verify the result
        expect(result).toEqual({ data: null });
        expect(httpClient.getRequest).toHaveBeenCalledWith({
          endpoint: `${API_PATH.PRODUCTS}/non-existent-id`,
        });
      });
    });
  });

  describe('getProducts() getProducts method', () => {
    const mockProducts: TProduct[] = [
      {
        id: '1',
        name: 'Product 1',
        image: ['image1.jpg'],
        price: 100,
        description: 'Description 1',
        category: 'Category 1',
      },
      {
        id: '2',
        name: 'Product 2',
        image: ['image2.jpg'],
        price: 200,
        description: 'Description 2',
        category: 'Category 2',
      },
    ];

    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe('Happy Path', () => {
      it('should return products data when API call is successful', async () => {
        // Arrange
        (httpClient.getRequest as jest.Mock).mockResolvedValue({
          data: mockProducts,
        });
        (formatUrlWithQuery as jest.Mock).mockReturnValue('formatted-url');

        // Act
        const result = await getProducts();

        // Assert
        expect(formatUrlWithQuery).toHaveBeenCalledWith(API_PATH.PRODUCTS, {
          name: undefined,
          id: undefined,
          limit: undefined,
          page: undefined,
        });
        expect(httpClient.getRequest).toHaveBeenCalledWith({
          endpoint: 'formatted-url',
          configOptions: { next: { tags: [QUERY_TAGS.PRODUCT] } },
        });
        expect(result).toEqual({ data: mockProducts });
      });

      it('should format URL with query parameters when provided', async () => {
        // Arrange
        const queryConfigs = { name: 'Test', id: '123', limit: 10, page: '2' };
        (httpClient.getRequest as jest.Mock).mockResolvedValue({
          data: mockProducts,
        });
        (formatUrlWithQuery as jest.Mock).mockReturnValue(
          'formatted-url-with-params',
        );

        // Act
        const result = await getProducts(queryConfigs);

        // Assert
        expect(formatUrlWithQuery).toHaveBeenCalledWith(
          API_PATH.PRODUCTS,
          queryConfigs,
        );
        expect(httpClient.getRequest).toHaveBeenCalledWith({
          endpoint: 'formatted-url-with-params',
          configOptions: { next: { tags: [QUERY_TAGS.PRODUCT] } },
        });
        expect(result).toEqual({ data: mockProducts });
      });
    });

    describe('Edge Cases', () => {
      it('should return an empty array when API response is empty', async () => {
        // Arrange
        (httpClient.getRequest as jest.Mock).mockResolvedValue({ data: [] });
        (formatUrlWithQuery as jest.Mock).mockReturnValue('formatted-url');

        // Act
        const result = await getProducts();

        // Assert
        expect(result).toEqual({ data: [] });
      });

      it('should throw an error when API call fails', async () => {
        // Arrange
        const error = new Error('Network Error');
        (httpClient.getRequest as jest.Mock).mockRejectedValue(error);
        (formatUrlWithQuery as jest.Mock).mockReturnValue('formatted-url');

        // Act & Assert
        await expect(getProducts()).rejects.toThrow('Network Error');
      });

      it('should handle undefined queryConfigs gracefully', async () => {
        // Arrange
        (httpClient.getRequest as jest.Mock).mockResolvedValue({
          data: mockProducts,
        });
        (formatUrlWithQuery as jest.Mock).mockReturnValue('formatted-url');

        // Act
        const result = await getProducts(undefined);

        // Assert
        expect(formatUrlWithQuery).toHaveBeenCalledWith(API_PATH.PRODUCTS, {
          name: undefined,
          id: undefined,
          limit: undefined,
          page: undefined,
        });
        expect(result).toEqual({ data: mockProducts });
      });
    });
  });
});
