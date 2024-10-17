import { Box } from '@chakra-ui/react';

// Types
import { TProduct } from '@/types';

// Sections
import {
  OverviewSection,
  ProductSection,
  ShowroomSection,
  TrendingSection,
} from '@/ui/section';

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
