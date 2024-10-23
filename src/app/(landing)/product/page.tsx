import { Metadata } from 'next';

// Apis
import { getProducts } from '@/apis';

// Pages
import { ProductPage } from '@/ui';
import { Box } from '@chakra-ui/react';

type TProductPage = {
  searchParams: {
    name?: string;
    category?: string;
    id?: string;
  };
};

export const metadata: Metadata = {
  title: 'Product',
  description:
    'This is the Product page in a comprehensive e-commerce web application designed to facilitate online shopping.',
};

const Product = async ({ searchParams }: TProductPage) => {
  const { name = '', category = '', id = '' } = searchParams || {};

  const queryConfig = {
    name: name,
    category: category,
    id: id,
  };
  const { data: productList } = await getProducts(queryConfig);

  return (
    <Box>
      <ProductPage productList={productList} />
    </Box>
  );
};

export default Product;
