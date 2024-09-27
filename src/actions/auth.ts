'use server';

import { AuthError } from 'next-auth';

// Config
import { signIn } from '@/configs';

// Constants
import {
  AUTH_METHODS,
  // AUTH_METHODS,
  ERROR_MESSAGES,
  ERROR_TYPES,
  TSignInForm,
} from '@/constants';

export const signInWithEmail = async (payload: TSignInForm) => {
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
