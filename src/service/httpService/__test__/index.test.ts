import { API_PATH, QUERY_TAGS } from '@/constants';
import { MOCK_SUCCESS_RESPONSE } from '@/mock';
import { httpClient } from '..';

global.fetch = jest.fn();

describe('httpClient service', () => {
  describe('getRequest() getRequest method', () => {
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
        const response = await httpClient.getRequest({
          endpoint: API_PATH.PRODUCTS,
          configOptions: { next: { tags: [QUERY_TAGS.PRODUCT] } },
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
        const response = await httpClient.getRequest({
          endpoint: API_PATH.PRODUCTS,
          configOptions: { next: { tags: [QUERY_TAGS.PRODUCT] } },
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
        await expect(
          httpClient.getRequest({
            endpoint: API_PATH.PRODUCTS,
            configOptions: {},
          }),
        ).rejects.toThrow('Not Found');
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
        // Act
        const response = await httpClient.getRequest({
          endpoint: API_PATH.PRODUCTS,
          configOptions: { next: { tags: [QUERY_TAGS.PRODUCT] } },
        });

        // Assert
        expect(response.data).toEqual(mockResponseData);
      });
    });
  });

  describe('postRequest() postRequest method', () => {
    const mockEndpoint = API_PATH.PRODUCTS;
    const mockBody = {
      id: '1',
      name: 'test',
      image: ['http://sample.jpg'],
      price: 10,
      description: 'test',
      category: 'string,',
    };
    // Happy path tests
    describe('Happy Path', () => {
      it('should successfully post data and return response data', async () => {
        (fetch as jest.Mock).mockResolvedValue({
          ok: true,
          json: jest.fn().mockResolvedValue(MOCK_SUCCESS_RESPONSE),
          headers: {
            get: jest.fn().mockReturnValue('application/json'),
          },
        } as never);

        // Act
        const response = await httpClient.postRequest({
          endpoint: mockEndpoint,
          body: mockBody,
        });

        expect(response.data).toEqual(MOCK_SUCCESS_RESPONSE);
      });
    });

    // Edge case tests
    describe('Edge Cases', () => {
      it('should handle non-JSON response gracefully', async () => {
        const mockResponseText = 'Success';

        (fetch as jest.Mock).mockResolvedValue({
          ok: true,
          text: jest.fn().mockResolvedValue(mockResponseText),
          headers: {
            get: jest.fn().mockReturnValue('text/plain'),
          },
        } as never);

        // Act
        const response = await httpClient.postRequest({
          endpoint: mockEndpoint,
          body: mockBody,
        });

        // Assert
        expect(response).toEqual({ data: mockResponseText });
      });

      it('should throw an error when response is not ok', async () => {
        const mockErrorMessage = 'Internal Server Error';

        (fetch as jest.Mock).mockResolvedValue({
          ok: false,
          statusText: mockErrorMessage,
        } as never);

        // Act & Assert
        await expect(
          httpClient.postRequest({
            endpoint: mockEndpoint,
            body: mockBody,
          }),
        ).rejects.toThrow(mockErrorMessage);
      });
    });
  });

  describe('patchRequest() patchRequest method', () => {
    const mockEndpoint = API_PATH.PRODUCTS;
    const mockBody = {
      id: '1',
      name: 'test',
      image: ['http://sample.jpg'],
      price: 10,
      description: 'test',
      category: 'string,',
    };
    // Happy path test
    it('should successfully patch the product and return response data', async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(MOCK_SUCCESS_RESPONSE),
        headers: {
          get: jest.fn().mockReturnValue('application/json'),
        },
      } as never);

      // Act
      const response = await httpClient.patchRequest({
        endpoint: mockEndpoint,
        body: mockBody,
      });

      expect(response.data).toEqual(MOCK_SUCCESS_RESPONSE);
    });

    // Edge case: Non-JSON response
    it('should handle non-JSON response gracefully', async () => {
      const mockResponseText = 'Success';

      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        text: jest.fn().mockResolvedValue(mockResponseText),
        headers: {
          get: jest.fn().mockReturnValue('text/plain'),
        },
      } as never);

      // Act
      const response = await httpClient.patchRequest({
        endpoint: mockEndpoint,
        body: mockBody,
      });

      expect(response.data).toEqual(mockResponseText);
    });

    // Edge case: Network error
    it('should throw an error when the network request fails', async () => {
      (fetch as jest.Mock).mockRejectedValue(
        new Error('Network Error') as never,
      );

      // Act & Assert
      await expect(
        httpClient.patchRequest({
          endpoint: mockEndpoint,
          body: mockBody,
        }),
      ).rejects.toThrow('Network Error');
    });

    // Edge case: HTTP error response
    it('should throw an error when the response is not ok', async () => {
      (fetch as jest.Mock).mockResolvedValue({
        ok: false,
        statusText: 'Bad Request',
      } as never);

      // Act & Assert
      await expect(
        httpClient.patchRequest({
          endpoint: mockEndpoint,
          body: mockBody,
        }),
      ).rejects.toThrow('Bad Request');
    });
  });
});
