'use client';

import { Stack } from '@chakra-ui/react';

// Components
import {
  OverviewSection,
  ProductSection,
  ShowroomSection,
  TrendingSection,
} from '@/ui/section';

const HomePage = () => (
  <Stack>
    <OverviewSection />
    <TrendingSection />
    <ShowroomSection />
    <ProductSection />
  </Stack>
);

export default HomePage;
