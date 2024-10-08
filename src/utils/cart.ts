// Types

import { ICartItem } from '@/types';

export const calculateTotalPrice = (cartItems: ICartItem[] = []) =>
  cartItems.reduce((acc, cartItem) => {
    const { product, quantity = 1 } = cartItem || {};
    const { price = 0 } = product || {};

    const itemPrice = price * quantity;

    return acc + itemPrice;
  }, 0);
