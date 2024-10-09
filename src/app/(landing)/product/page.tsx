import { Metadata } from 'next';

// Apis
import { getProducts } from '@/apis';

// Pages
import { ProductPage } from '@/ui';

type TProductPage = {
  searchParams: {
    name?: string;
    id?: string;
  };
};

export const metadata: Metadata = {
  title: 'Product',
  description:
    'This is the Product page in a comprehensive e-commerce web application designed to facilitate online shopping.',
};

const Product = async ({ searchParams }: TProductPage) => {
  const { name = '', id = '' } = searchParams || {};

  const queryConfig = {
    name: name,
    id: id,
  };
  const { data: productList } = await getProducts(queryConfig);
  return (
    <>
      <ProductPage productList={productList} />
    </>
  );
};

export default Product;
