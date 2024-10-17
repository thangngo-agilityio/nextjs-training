// Service
import { httpClient } from '@/service';

// Constants
import { API_PATH, QUERY_TAGS } from '@/constants';

// Types
import { TProduct } from '@/types';
import { formatUrlWithQuery } from '@/utils';

type configs = {
  id?: string;
  name?: string;
  category?: string;
  limit?: number;
  page?: string;
};

export const getProducts = async (
  queryConfigs?: configs,
): Promise<{
  data: TProduct[];
}> => {
  const queryParams = {
    name: queryConfigs?.name,
    category: queryConfigs?.category,
    id: queryConfigs?.id,
    limit: queryConfigs?.limit,
    page: queryConfigs?.page,
  };
  const endpoint = formatUrlWithQuery(API_PATH.PRODUCTS, queryParams);

  try {
    const res = await httpClient.getRequest<TProduct[]>({
      endpoint,
      configOptions: { next: { tags: [QUERY_TAGS.PRODUCT] } },
    });

    const { data = [] } = res || {};

    return { data };
  } catch (error) {
    throw error;
  }
};

export const getProductDetail = async (id: string) => {
  try {
    const res = await httpClient.getRequest<TProduct>({
      endpoint: `${API_PATH.PRODUCTS}/${id}`,
    });

    const { data } = res || {};

    return { data };
  } catch (error) {
    return { error };
  }
};
