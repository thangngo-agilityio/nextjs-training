// Apis
import { getProducts } from '@/apis';

// Constants
import { PAGE_SIZE } from '@/constants';

// Section
import {
  OverviewSection,
  ProductSection,
  ShowroomSection,
  TrendingSection,
} from '@/ui/section';
import { Box } from '@chakra-ui/react';

type THomePage = {
  searchParams: {
    limit?: number;
    page?: string;
  };
};

const HomePage = async ({ searchParams }: THomePage) => {
  const queryConfigs = {
    limit: (searchParams.limit = PAGE_SIZE),
    page: (searchParams.page = '1'),
  };

  const { data: productList } = await getProducts(queryConfigs);

  return (
    <Box overflow="hidden">
      <OverviewSection isHomePage />
      <TrendingSection productList={productList} />
      <ShowroomSection />
      <ProductSection productList={productList} />
    </Box>
  );
};

export default HomePage;
