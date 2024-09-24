'use server';

import { AuthError } from 'next-auth';

// Config
import { signIn } from '@/configs';

// Constants
import { AUTH_METHODS, ERROR_MESSAGES, ERROR_TYPES } from '@/constants';

type TSignInPayload = {
  email: string;
  password: string;
};

export const signInWithEmail = async (payload: TSignInPayload) => {
  try {
    await signIn(AUTH_METHODS.CREDENTIALS, payload);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case ERROR_TYPES.CREDENTIALS_SIGN_IN:
          return ERROR_MESSAGES.USER_NOT_FOUND;
        default:
          return ERROR_MESSAGES.UNKNOWN_ERROR;
      }
    }

    throw error;
  }
};
