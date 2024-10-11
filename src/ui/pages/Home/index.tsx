'use client';

import { Box, useBreakpointValue } from '@chakra-ui/react';

// Types
import { TProduct } from '@/types';
import {
  OverviewSection,
  ProductSection,
  ShowroomSection,
  TrendingSection,
} from '@/ui/section';

type THomePage = {
  productList: TProduct[];
};

const HomePage = ({ productList }: THomePage) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box overflow="hidden">
      <OverviewSection isHomePage isMobile={isMobile} />
      <TrendingSection productList={productList} />
      <ShowroomSection />
      <ProductSection productList={productList} />
    </Box>
  );
};

export default HomePage;
