import dynamic from 'next/dynamic';

// Apis
import { getProducts } from '@/apis';

// Pages
const Product = dynamic(() => import('@/ui/pages/Product'));

const ProductPage = async () => {
  const { data: productList } = await getProducts();
  return (
    <>
      <Product productList={productList} />
    </>
  );
};

export default ProductPage;
