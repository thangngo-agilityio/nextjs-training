// Types
import { TUser } from '@/types';

export const MOCK_SIGN_UP_PAYLOAD: TUser = {
  id: '1',
  email: 'user+01@gmail.com',
  firstName: 'John',
  lastName: 'A',
  password: 'Abcd@12345',
};

export const MOCK_SUCCESS_SIGN_UP_RES = {
  data: { ...MOCK_SIGN_UP_PAYLOAD },
};

export const MOCK_SIGN_IN_PAYLOAD = {
  email: 'user+01@gmail.com',
  password: 'Abcd@12345',
};
