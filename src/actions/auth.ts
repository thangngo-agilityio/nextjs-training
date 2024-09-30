'use server';

import { AuthError } from 'next-auth';

// Config
import { signIn, signOut } from '@/configs';

// Constants
import {
  API_PATH,
  AUTH_METHODS,
  ERROR_MESSAGES,
  ERROR_TYPES,
  TSignInForm,
} from '@/constants';

// Types
import { TUser } from '@/types';
import { httpClient } from '@/service';

type TSignUpPayload = Omit<TUser, 'id'>;

type TSignUpResponse = { user: Omit<TUser, 'password'> };

export const signUp = async (
  payload: TSignUpPayload,
): Promise<{ error?: string; user?: Omit<TUser, 'password'> }> => {
  try {
    const res = await httpClient.postRequest<TSignUpPayload, TSignUpResponse>({
      endpoint: API_PATH.USERS,
      body: payload,
    });

    const { data } = res || {};
    const { user } = data || {};

    return { user };
  } catch (error) {
    return { error: ERROR_MESSAGES.EMAIL_EXIST };
  }
};

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

export const logout = (): Promise<void> => signOut();
