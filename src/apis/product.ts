// Service
import { httpClient } from '@/service';

// Constants
import { API_PATH } from '@/constants';

// Types
import { TProduct } from '@/types';

export const getProducts = async (): Promise<{
  data: TProduct[];
}> => {
  try {
    const res = await httpClient.getRequest<TProduct[]>({
      endpoint: API_PATH.PRODUCTS,
    });

    const { data = [] } = res || {};

    return { data };
  } catch (error) {
    throw error;
  }
};
