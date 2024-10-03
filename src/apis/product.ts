// Service
import { httpClient } from '@/service';

// Constants
import { API_PATH } from '@/constants';

// Types
import { TProduct } from '@/types';
import { formatUrlWithQuery } from '@/utils';

type configs = {
  id?: number;
  name?: string;
};

export const getProducts = async (
  queryConfigs?: configs,
): Promise<{
  data: TProduct[];
}> => {
  const queryParams = {
    name: queryConfigs?.name,
    id: queryConfigs?.id,
  };
  const endpoint = formatUrlWithQuery(API_PATH.PRODUCTS, queryParams);

  try {
    const res = await httpClient.getRequest<TProduct[]>({
      endpoint,
    });

    const { data = [] } = res || {};

    return { data };
  } catch (error) {
    throw error;
  }
};
