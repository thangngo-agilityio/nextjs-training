// Constants
import { SECOND_URL } from '@/constants';

type TRequest = {
  endpoint: string;
  configOptions?: RequestInit;
};

export type ResponseData<T> = {
  data: T;
};

const request = async <T>({
  endpoint,
  configOptions,
}: TRequest): Promise<ResponseData<T>> => {
  const res = await fetch(SECOND_URL + endpoint, configOptions);

  if (!res?.ok) {
    throw new Error(res?.statusText);
  }

  const contentType = res.headers.get('Content-Type') || '';

  let result: T;

  if (contentType.includes('application/json')) {
    result = await res.json();
  } else {
    result = (await res.text()) as unknown as T;
  }

  return { data: result };
};

export const getCart = async <T>(
  endpoint: string,
  configOptions?: RequestInit,
): Promise<ResponseData<T>> => {
  const options: RequestInit = {
    method: 'GET',
    ...configOptions,
  };

  const response = await request<T>({ endpoint, configOptions: options });

  return response;
};

export const postCart = async <T>(
  endpoint: string,
  body: T,
  configOptions?: RequestInit,
): Promise<ResponseData<T>> => {
  const options: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...configOptions,
  };

  const response = await request<T>({ endpoint, configOptions: options });

  return response;
};

export const patchCart = async <T>(
  endpoint: string,
  body: T,
  configOptions?: RequestInit,
): Promise<ResponseData<T>> => {
  const options: RequestInit = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...configOptions,
  };

  const response = await request<T>({ endpoint, configOptions: options });

  return response;
};
