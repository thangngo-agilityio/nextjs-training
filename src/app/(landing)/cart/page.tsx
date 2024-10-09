// Apis
import { getCartItems } from '@/apis';

// Components
import { CartPage } from '@/ui';

const Cart = async () => {
  const { data: cartList } = await getCartItems();
  const { cartItems = [], id } = cartList || {};
  return (
    <>
      <CartPage cartItem={cartItems} cartId={id} />
    </>
  );
};

export default Cart;
