import { TProduct } from './product';

export type ICartItem = {
  product?: TProduct;
  quantity: number;
};

export type ICart = {
  id: number;
  userId: string;
  cartItems: ICartItem[];
};
