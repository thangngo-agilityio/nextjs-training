import { ReactNode } from 'react';
import lazy from 'next/dynamic';

// Layouts
const Footer = lazy(() => import('@/layouts/Footer'));

type TMainLayout = {
  children: ReactNode;
};

const MainLayout = ({ children }: TMainLayout) => (
  <>
    {children}
    <Footer />
  </>
);

export default MainLayout;
