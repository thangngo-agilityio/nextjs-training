import { Suspense } from 'react';
import { Flex } from '@chakra-ui/react';

// Components
import { SkeletonProductList } from '@/components';
import { OverviewSection } from '@/ui/section';

// Types
import { TProduct } from '@/types';
import dynamic from 'next/dynamic';

const FilterProduct = dynamic(() => import('@/components/FilterProduct'));
const ProductList = dynamic(() => import('@/components/ProductList'));

type TTrendingSection = {
  productList: TProduct[];
};

const ProductPage = ({ productList }: TTrendingSection) => (
  <>
    <OverviewSection title="Product page" />
    <Flex
      pb={{ base: '100px', lg: '350px' }}
      flexDir="column"
      alignItems="center"
      mb="20px"
    >
      <FilterProduct />

      <Suspense fallback={<SkeletonProductList length={8} />}>
        <ProductList productList={productList} />
      </Suspense>
    </Flex>
  </>
);

export default ProductPage;
