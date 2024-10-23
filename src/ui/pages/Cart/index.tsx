import dynamic from 'next/dynamic';

// Components
import {} from '@/components';
import { getCartItems } from '@/apis';
const CartList = dynamic(() => import('@/components/CartList'));
const TotalCart = dynamic(() => import('@/components/TotalCart'));

const CartPage = async () => {
  const { data: cartList } = await getCartItems();
  const { cartItems = [], id } = cartList || {};

  return (
    <>
      <CartList cartItem={cartItems} cartId={id} />
      <TotalCart cartItem={cartItems} cartId={id} />
    </>
  );
};

export default CartPage;
