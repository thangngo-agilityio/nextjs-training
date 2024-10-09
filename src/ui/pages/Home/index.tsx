import { Stack } from '@chakra-ui/react';

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
    <Stack>
      <OverviewSection isHomePage />
      <TrendingSection productList={productList} />
      <ShowroomSection />
      <ProductSection productList={productList} />
    </Stack>
  );
};

export default HomePage;
