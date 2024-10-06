import dynamic from 'next/dynamic';

// Apis
import { getProductDetail } from '@/apis';

// Component
const ProductDetail = dynamic(() => import('@/ui/pages/ProductDetail'));

type TProductDetailPage = {
  params: { id: string };
};

const ProductDetailPage = async ({ params }: TProductDetailPage) => {
  const { id: productId } = params || {};

  const { data: productDetail } = await getProductDetail(productId);

  const {
    image = [],
    name = '',
    price = 0,
    description = '',
    category = '',
  } = productDetail || {};

  return (
    <>
      <ProductDetail
        image={image}
        name={name}
        price={price}
        description={description}
        category={category}
      />
    </>
  );
};

export default ProductDetailPage;
