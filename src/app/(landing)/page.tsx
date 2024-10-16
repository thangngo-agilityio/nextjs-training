import { getProducts } from '@/apis';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Constants
import { PAGE_SIZE } from '@/constants';
import { Header } from '@/layouts';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'This is the Home page in a comprehensive e-commerce web application designed to facilitate online shopping.',
};

// Pages
const HomePage = dynamic(() => import('@/ui/pages/Home'));

type THome = {
  searchParams: {
    limit?: number;
    page?: string;
  };
};

const Home = async ({ searchParams }: THome) => {
  const queryConfigs = {
    limit: (searchParams.limit = PAGE_SIZE),
    page: (searchParams.page = '1'),
  };

  const { data: productList } = await getProducts(queryConfigs);
  return (
    <>
      <Header />
      <HomePage productList={productList} />
    </>
  );
};

export default Home;
