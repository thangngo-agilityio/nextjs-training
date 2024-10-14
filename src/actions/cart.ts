'use server';

import { revalidateTag } from 'next/cache';

// Service
import { patchCart, postCart } from '@/service';

// Types
import { ICartItem } from '@/types';

// Constants
import { API_PATH, ERROR_MESSAGES } from '@/constants';

export const createCart = async (
  cartItems: ICartItem[],
  userId: string,
): Promise<{ error: string } | void> => {
  try {
    await postCart(API_PATH.CARTS, { userId, cartItems });

    revalidateTag(API_PATH.CARTS);
  } catch (error) {
    return { error: ERROR_MESSAGES.CREATE_CART };
  }
};

export const updateMyCart = async (
  cartId: string,
  cartItems: ICartItem[],
): Promise<{ error: string } | void> => {
  try {
    await patchCart(`${API_PATH.CARTS}/${cartId}`, { cartItems });

    revalidateTag(API_PATH.CARTS);
  } catch (error) {
    return { error: ERROR_MESSAGES.UPDATE_CART };
  }
};
