import { Metadata } from 'next';

// Apis
import { getCartItems } from '@/apis';

// Components
import { CartPage } from '@/ui';

// Layouts
import { Header } from '@/layouts';

export const metadata: Metadata = {
  title: 'Cart',
  description:
    'This is the Cart page in a comprehensive e-commerce web application designed to facilitate online shopping.',
};

const Cart = async () => {
  const { data: cartList } = await getCartItems();
  const { cartItems = [], id } = cartList || {};
  return (
    <>
      <Header />
      <CartPage cartItem={cartItems} cartId={id} />
    </>
  );
};

export default Cart;
