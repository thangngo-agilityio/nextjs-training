import { SECOND_URL } from '@/constants';
import { getCart, patchCart, postCart } from '../index';
import { MOCK_SUCCESS_RESPONSE } from '@/mock';

global.fetch = jest.fn();

describe('Cart service', () => {
  describe('getCart() getCart method', () => {
    // Happy path tests
    describe('Happy Path', () => {
      it('should fetch data successfully when response is JSON', async () => {
        // Arrange
        const mockResponseData = { items: ['item1', 'item2'] };
        (fetch as jest.Mock).mockResolvedValue({
          ok: true,
          json: jest.fn().mockResolvedValue(mockResponseData),
          headers: {
            get: jest.fn().mockReturnValue('application/json'),
          },
        } as never);

        // Act
        const response = await getCart('/cart', {
          headers: { 'Content-Type': 'application/json' },
        });

        // Assert
        expect(fetch).toHaveBeenCalledWith(SECOND_URL + '/cart', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        expect(response.data).toEqual(mockResponseData);
      });

      it('should fetch data successfully when response is text', async () => {
        // Arrange
        const mockResponseData = 'Some text response';
        (fetch as jest.Mock).mockResolvedValue({
          ok: true,
          text: jest.fn().mockResolvedValue(mockResponseData),
          headers: {
            get: jest.fn().mockReturnValue('text/plain'),
          },
        } as never);

        // Act
        const response = await getCart('/cart', {
          headers: { 'Content-Type': 'text/plain' },
        });

        // Assert
        expect(fetch).toHaveBeenCalledWith(SECOND_URL + '/cart', {
          method: 'GET',
          headers: { 'Content-Type': 'text/plain' },
        });
        expect(response.data).toEqual(mockResponseData);
      });
    });

    // Edge case tests
    describe('Edge Cases', () => {
      it('should throw an error when fetch response is not ok', async () => {
        // Arrange
        (fetch as jest.Mock).mockResolvedValue({
          ok: false,
          statusText: 'Not Found',
        } as never);

        // Act & Assert
        await expect(getCart('/cart', {})).rejects.toThrow('Not Found');
      });

      it('should handle missing Content-Type header gracefully', async () => {
        // Arrange
        const mockResponseData = 'Fallback text response';
        (fetch as jest.Mock).mockResolvedValue({
          ok: true,
          text: jest.fn().mockResolvedValue(mockResponseData),
          headers: {
            get: jest.fn().mockReturnValue(null),
          },
        } as never);

        // Act
        const response = await getCart('/cart', {});

        // Assert
        expect(response.data).toEqual(mockResponseData);
      });
    });
  });

  describe('postCart() postCart method', () => {
    // Happy path tests
    describe('Happy Path', () => {
      it('should successfully post data and return response data', async () => {
        // Arrange
        const mockEndpoint = '/cart';
        const mockBody = { item: 'apple', quantity: 3 };

        (fetch as jest.Mock).mockResolvedValue({
          ok: true,
          json: jest.fn().mockResolvedValue(MOCK_SUCCESS_RESPONSE),
          headers: {
            get: jest.fn().mockReturnValue('application/json'),
          },
        } as never);

        // Act
        const response = await postCart(mockEndpoint, mockBody);

        // Assert
        expect(fetch).toHaveBeenCalledWith(
          SECOND_URL + mockEndpoint,
          expect.objectContaining({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mockBody),
          }),
        );
        expect(response).toEqual(MOCK_SUCCESS_RESPONSE);
      });
    });

    // Edge case tests
    describe('Edge Cases', () => {
      it('should handle non-JSON response gracefully', async () => {
        // Arrange
        const mockEndpoint = '/cart';
        const mockBody = { item: 'banana', quantity: 5 };
        const mockResponseText = 'Success';

        (fetch as jest.Mock).mockResolvedValue({
          ok: true,
          text: jest.fn().mockResolvedValue(mockResponseText),
          headers: {
            get: jest.fn().mockReturnValue('text/plain'),
          },
        } as never);

        // Act
        const response = await postCart(mockEndpoint, mockBody);

        // Assert
        expect(response).toEqual({ data: mockResponseText });
      });

      it('should throw an error when response is not ok', async () => {
        // Arrange
        const mockEndpoint = '/cart';
        const mockBody = { item: 'orange', quantity: 2 };
        const mockErrorMessage = 'Internal Server Error';

        (fetch as jest.Mock).mockResolvedValue({
          ok: false,
          statusText: mockErrorMessage,
        } as never);

        // Act & Assert
        await expect(postCart(mockEndpoint, mockBody)).rejects.toThrow(
          mockErrorMessage,
        );
      });

      it('should handle missing Content-Type header', async () => {
        // Arrange
        const mockEndpoint = '/cart';
        const mockBody = { item: 'grape', quantity: 10 };
        const MOCK_SUCCESS_RESPONSE = { data: { success: true } };

        (fetch as jest.Mock).mockResolvedValue({
          ok: true,
          json: jest.fn().mockResolvedValue(MOCK_SUCCESS_RESPONSE),
          headers: {
            get: jest.fn().mockReturnValue(null),
          },
        } as never);

        // Act
        const response = await postCart(mockEndpoint, mockBody);

        // Assert
        expect(response).toEqual(MOCK_SUCCESS_RESPONSE);
      });
    });
  });

  describe('patchCart() patchCart method', () => {
    // Happy path test
    it('should successfully patch the cart and return response data', async () => {
      // Arrange
      const mockEndpoint = '/cart';
      const mockBody = { item: 'apple', quantity: 3 };

      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(MOCK_SUCCESS_RESPONSE),
        headers: {
          get: jest.fn().mockReturnValue('application/json'),
        },
      } as never);

      // Act
      const response = await patchCart(mockEndpoint, mockBody);

      // Assert
      expect(fetch).toHaveBeenCalledWith(
        SECOND_URL + mockEndpoint,
        expect.objectContaining({
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mockBody),
        }),
      );
      expect(response).toEqual(MOCK_SUCCESS_RESPONSE);
    });

    // Edge case: Non-JSON response
    it('should handle non-JSON response gracefully', async () => {
      // Arrange
      const mockEndpoint = '/cart';
      const mockBody = { item: 'banana', quantity: 2 };
      const mockResponseText = 'Success';

      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        text: jest.fn().mockResolvedValue(mockResponseText),
        headers: {
          get: jest.fn().mockReturnValue('text/plain'),
        },
      } as never);

      // Act
      const response = await patchCart(mockEndpoint, mockBody);

      // Assert
      expect(fetch).toHaveBeenCalledWith(
        SECOND_URL + mockEndpoint,
        expect.objectContaining({
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mockBody),
        }),
      );
      expect(response).toEqual({ data: mockResponseText });
    });

    // Edge case: Network error
    it('should throw an error when the network request fails', async () => {
      // Arrange
      const mockEndpoint = '/cart';
      const mockBody = { item: 'orange', quantity: 1 };

      (fetch as jest.Mock).mockRejectedValue(
        new Error('Network Error') as never,
      );

      // Act & Assert
      await expect(patchCart(mockEndpoint, mockBody)).rejects.toThrow(
        'Network Error',
      );
    });

    // Edge case: HTTP error response
    it('should throw an error when the response is not ok', async () => {
      // Arrange
      const mockEndpoint = '/cart';
      const mockBody = { item: 'grape', quantity: 5 };

      (fetch as jest.Mock).mockResolvedValue({
        ok: false,
        statusText: 'Bad Request',
      } as never);

      // Act & Assert
      await expect(patchCart(mockEndpoint, mockBody)).rejects.toThrow(
        'Bad Request',
      );
    });
  });
});
