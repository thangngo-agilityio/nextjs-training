import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

// Layouts
const Header = dynamic(() => import('@/layouts/Header'));
const Footer = dynamic(() => import('@/layouts/Footer'));

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
