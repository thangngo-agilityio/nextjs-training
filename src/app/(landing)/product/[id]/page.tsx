import dynamic from 'next/dynamic';

// Apis
import { getCartItems, getProductDetail } from '@/apis';

// Component
const ProductDetail = dynamic(() => import('@/ui/pages/ProductDetail'));

type TProductDetailPage = {
  params: { id: string };
};

const ProductDetailPage = async ({ params }: TProductDetailPage) => {
  const { id: productId } = params || {};

  const { data: cartList } = await getCartItems();
  const { cartItems = [], id: cartId } = cartList || {};

  const { data: product } = await getProductDetail(productId);

  return (
    <>
      <ProductDetail cartId={cartId} product={product} cartItems={cartItems} />
    </>
  );
};

export default ProductDetailPage;
