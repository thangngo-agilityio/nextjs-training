// Services
import { httpClient } from '@/service';

// Types
import { TUser } from '@/types';

// Constants
import { API_PATH } from '@/constants';

export const getUsers = async (): Promise<{ data: TUser[] }> => {
  try {
    const res = await httpClient.getRequest<TUser[]>({
      endpoint: API_PATH.USERS,
      configOptions: { next: { tags: [API_PATH.USERS] } },
    });

    const { data = [] } = res || {};

    return { data };
  } catch (error) {
    throw error;
  }
};
