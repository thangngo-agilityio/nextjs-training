// Types

import { ICartItem } from '@/types';

export const calculateTotalPrice = (cartItems: ICartItem[] = []) =>
  cartItems.reduce((acc, cartItem) => {
    const { product, quantity = 1 } = cartItem || {};
    const { price = 0 } = product || {};

    const itemPrice = price * quantity;

    return acc + itemPrice;
  }, 0);

export const calculateTotalQuantity = (cartItems: ICartItem[] = []) =>
  cartItems.reduce((acc, cartItem) => {
    const { quantity = 0 } = cartItem || {};

    return acc + quantity;
  }, 0);
