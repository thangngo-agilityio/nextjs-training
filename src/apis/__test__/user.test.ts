// Api
import { getUsers } from '../user';

// Service
import { httpClient } from '@/service';

// Constants
import { API_PATH } from '@/constants';

// Types
import { TUser } from '@/types';

// Mock the httpClient
jest.mock('@/service', () => ({
  httpClient: {
    getRequest: jest.fn(),
  },
}));

describe('getUsers() getUsers method', () => {
  // Happy path tests
  describe('Happy Path', () => {
    it('should return a list of users when the API call is successful', async () => {
      // Arrange: Set up the mock response
      const mockUsers: TUser[] = [
        {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          password: 'password123',
        },
        {
          id: '2',
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane.doe@example.com',
          password: 'password456',
        },
      ];
      (httpClient.getRequest as jest.Mock).mockResolvedValue({
        data: mockUsers,
      });

      // Act: Call the function
      const result = await getUsers();

      // Assert: Verify the result
      expect(result).toEqual({ data: mockUsers });
      expect(httpClient.getRequest).toHaveBeenCalledWith({
        endpoint: API_PATH.USERS,
        configOptions: { next: { tags: [API_PATH.USERS] } },
      });
    });
  });

  // Edge case tests
  describe('Edge Cases', () => {
    it('should return an empty array when the API response is empty', async () => {
      // Arrange: Set up the mock response
      (httpClient.getRequest as jest.Mock).mockResolvedValue({ data: [] });

      // Act: Call the function
      const result = await getUsers();

      // Assert: Verify the result
      expect(result).toEqual({ data: [] });
    });

    it('should throw an error when the API call fails', async () => {
      // Arrange: Set up the mock to throw an error
      const mockError = new Error('Network Error');
      (httpClient.getRequest as jest.Mock).mockRejectedValue(mockError);

      // Act & Assert: Call the function and expect an error
      await expect(getUsers()).rejects.toThrow('Network Error');
    });

    it('should handle undefined response gracefully', async () => {
      // Arrange: Set up the mock to return undefined
      (httpClient.getRequest as jest.Mock).mockResolvedValue(undefined);

      // Act: Call the function
      const result = await getUsers();

      // Assert: Verify the result
      expect(result).toEqual({ data: [] });
    });
  });
});
