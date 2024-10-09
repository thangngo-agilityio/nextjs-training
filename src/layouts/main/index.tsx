import { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

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
