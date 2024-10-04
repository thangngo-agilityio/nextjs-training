import { Stack } from '@chakra-ui/react';

// Components
import dynamic from 'next/dynamic';

// Apis
import { getProducts } from '@/apis';
import { PAGE_SIZE } from '@/constants';

const OverviewSection = dynamic(() => import('@/ui/section/Overview'));
const TrendingSection = dynamic(() => import('@/ui/section/Trending'));
const ShowroomSection = dynamic(() => import('@/ui/section/Showroom'));
const ProductSection = dynamic(() => import('@/ui/section/Product'));
const Header = dynamic(() => import('@/layouts/Header'));

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
      <Header />
      <OverviewSection isHomePage />
      <TrendingSection productList={productList} />
      <ShowroomSection />
      <ProductSection productList={productList} />
    </Stack>
  );
};

export default HomePage;
