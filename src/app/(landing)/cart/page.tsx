import dynamic from 'next/dynamic';

// Apis
import { getCartItems } from '@/apis';

// Components
const Cart = dynamic(() => import('@/ui/pages/Cart'));

const CartPage = async () => {
  const { data: cartList } = await getCartItems();
  const { cartItems = [], id } = cartList || {};
  return (
    <>
      <Cart cartItem={cartItems} cartId={id} />
    </>
  );
};

export default CartPage;
