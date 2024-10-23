import { Box } from '@chakra-ui/react';

// Sections
import {
  OverviewSection,
  ProductSection,
  ShowroomSection,
  TrendingSection,
} from '@/ui/section';
import { getProducts } from '@/apis';

type THomePage = {
  queryConfigs: {
    limit?: number;
    page?: string;
  };
};

const HomePage = async ({ queryConfigs }: THomePage) => {
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
