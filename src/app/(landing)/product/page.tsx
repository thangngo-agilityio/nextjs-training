import { Box, Flex } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Metadata } from 'next';

// Pages
import { OverviewSection, ProductPage } from '@/ui';
import { FilterProduct, SkeletonProductList } from '@/components';

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

const Product = ({ searchParams }: TProductPage) => {
  const { name = '', category = '', id = '' } = searchParams || {};

  const queryConfig = {
    name: name,
    category: category,
    id: id,
  };

  return (
    <Box>
      <OverviewSection title="Product page" />
      <Flex
        pb={{ base: '100px', lg: '350px' }}
        flexDir="column"
        alignItems="center"
        mb="20px"
      >
        <Flex
          maxW={{ base: 'unset', lg: '1512px' }}
          flexDir="column"
          alignItems="center"
        >
          <FilterProduct />
          <Suspense fallback={<SkeletonProductList length={8} />}>
            <ProductPage queryConfig={queryConfig} />
          </Suspense>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Product;
