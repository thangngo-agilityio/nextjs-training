import { waitFor } from '@testing-library/react';
import { AuthError } from 'next-auth';

// Services
import { httpClient, ResponseData } from '@/service';

// Constants
import { ERROR_MESSAGES, ERROR_TYPES } from '@/constants';

// APIs
import { signUp, signInWithEmail, logout } from '../auth';

// Auth Configs
import * as configs from '@/configs';
import { signOut } from '@/configs';

// Mocks
import {
  MOCK_ERROR_RESPONSE,
  MOCK_SIGN_IN_PAYLOAD,
  MOCK_SIGN_UP_PAYLOAD,
  MOCK_SUCCESS_RESPONSE,
  MOCK_SUCCESS_SIGN_UP_RES,
} from '@/mock';

describe('Auth actions', () => {
  describe('signUp', () => {
    test('should sign up a new account successfully', async () => {
      jest
        .spyOn(httpClient, 'postRequest')
        .mockResolvedValue(MOCK_SUCCESS_SIGN_UP_RES);

      const user = await signUp(MOCK_SIGN_UP_PAYLOAD);

      waitFor(() => expect(user).toEqual(MOCK_SUCCESS_SIGN_UP_RES.data));
    });

    test('should sign up a new account successfully with null value is returned', async () => {
      jest
        .spyOn(httpClient, 'postRequest')
        .mockResolvedValue(null as unknown as ResponseData<null>);

      const user = await signUp(MOCK_SIGN_UP_PAYLOAD);

      waitFor(() => expect(user).toEqual(undefined));
    });

    test('should sign up a new account failed', async () => {
      jest
        .spyOn(httpClient, 'postRequest')
        .mockRejectedValue(MOCK_ERROR_RESPONSE);

      const res = await signUp(MOCK_SIGN_UP_PAYLOAD);

      expect(res?.error).toEqual(ERROR_MESSAGES.EMAIL_EXIST);
    });
  });

  describe('signIn', () => {
    test('should sign in successfully', async () => {
      jest.spyOn(configs, 'signIn').mockResolvedValue(MOCK_SUCCESS_RESPONSE);

      const res = await signInWithEmail(MOCK_SIGN_IN_PAYLOAD);

      waitFor(() => {
        expect(res).toBeUndefined();
      });
    });

    test('should sign in failed with email or password incorrect', async () => {
      const authError = new AuthError(ERROR_TYPES.CREDENTIALS_SIGN_IN);
      jest.spyOn(configs, 'signIn').mockRejectedValue(authError);

      const res = await signInWithEmail(MOCK_SIGN_IN_PAYLOAD);

      waitFor(() => {
        expect(res).toEqual(ERROR_MESSAGES.USER_NOT_FOUND);
      });
    });

    test('should sign in failed with UNKNOWN_ERROR', async () => {
      const authError = new AuthError('UNKNOWN_ERROR');
      jest.spyOn(configs, 'signIn').mockRejectedValue(authError);

      const res = await signInWithEmail(MOCK_SIGN_IN_PAYLOAD);

      waitFor(() => {
        expect(res).toEqual(ERROR_MESSAGES.UNKNOWN_ERROR);
      });
    });

    it('should throw an error for unknown error', async () => {
      const unknownError = new Error('Unknown error');
      jest.spyOn(configs, 'signIn').mockRejectedValue(unknownError);

      await expect(signInWithEmail(MOCK_SIGN_IN_PAYLOAD)).rejects.toThrow(
        unknownError,
      );
    });
  });

  describe('logout', () => {
    it('should call signOut', async () => {
      await logout();

      expect(signOut).toHaveBeenCalled();
    });
  });
});
