import { ReactNode } from 'react';
import lazy from 'next/dynamic';

// Layouts
import Header from '../Header';

const Footer = lazy(() => import('@/layouts/Footer'));

type TMainLayout = {
  children: ReactNode;
};

const MainLayout = ({ children }: TMainLayout) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
