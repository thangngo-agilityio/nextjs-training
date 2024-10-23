import dynamic from 'next/dynamic';

// Types
import { getProducts } from '@/apis';

const ProductList = dynamic(() => import('@/components/ProductList'));

type TTrendingSection = {
  queryConfig: {
    name?: string;
    category?: string;
    id?: string;
  };
};

const ProductPage = async ({ queryConfig }: TTrendingSection) => {
  const { data: productList } = await getProducts(queryConfig);
  return <ProductList productList={productList} />;
};

export default ProductPage;
