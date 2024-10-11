'use client';

import lazy from 'next/dynamic';
import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';

// Apis
import { SkeletonSection } from '@/components';

// Types
import { TProduct } from '@/types';

const OverviewSection = dynamic(() => import('@/ui/section/Overview'), {
  loading: () => <SkeletonSection />,
});

const TrendingSection = dynamic(() => import('@/ui/section/Trending'), {
  loading: () => <SkeletonSection />,
});
const ShowroomSection = lazy(() => import('@/ui/section/Showroom'));
const ProductSection = lazy(() => import('@/ui/section/Product'));

type THomePage = {
  productList: TProduct[];
};

const HomePage = ({ productList }: THomePage) => (
  <Box overflow="hidden">
    <OverviewSection isHomePage />
    <TrendingSection productList={productList} />
    <ShowroomSection />
    <ProductSection productList={productList} />
  </Box>
);

export default HomePage;
