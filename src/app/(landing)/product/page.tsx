import dynamic from 'next/dynamic';

// Apis
import { getProducts } from '@/apis';

// Pages
const Product = dynamic(() => import('@/ui/pages/Product'));

type TProductPage = {
  searchParams: {
    name?: string;
    id?: string;
  };
};

const ProductPage = async ({ searchParams }: TProductPage) => {
  const { name = '', id = '' } = searchParams || {};

  const queryConfig = {
    name: name,
    id: id,
  };
  const { data: productList } = await getProducts(queryConfig);
  return (
    <>
      <Product productList={productList} />
    </>
  );
};

export default ProductPage;
