import { Stack } from '@chakra-ui/react';

// Components
import dynamic from 'next/dynamic';

// Apis
import { getProducts } from '@/apis';

const OverviewSection = dynamic(() => import('@/ui/section/Overview'));
const TrendingSection = dynamic(() => import('@/ui/section/Trending'));
const ShowroomSection = dynamic(() => import('@/ui/section/Showroom'));
const ProductSection = dynamic(() => import('@/ui/section/Product'));

const HomePage = async () => {
  const { data: productList } = await getProducts();

  return (
    <Stack>
      <OverviewSection />
      <TrendingSection productList={productList} />
      <ShowroomSection />
      <ProductSection productList={productList} />
    </Stack>
  );
};

export default HomePage;
