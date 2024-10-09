// Apis
import { getCartItems, getProductDetail } from '@/apis';

// Component
import { ProductDetail } from '@/ui';

type TProductDetailPage = {
  params: { id: string };
};

const ProductDetailPage = async ({ params }: TProductDetailPage) => {
  const { id: productId } = params || {};

  const { data: cartList } = await getCartItems();
  const { cartItems = [], id } = cartList || {};

  const { data: product } = await getProductDetail(productId);

  return (
    <>
      <ProductDetail cartId={id} product={product} cartItems={cartItems} />
    </>
  );
};

export default ProductDetailPage;
