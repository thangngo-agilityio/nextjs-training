'use client';

import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

// Layouts
import Header from '../Header';
import Footer from '../Footer';

type TMainLayout = {
  children: ReactNode;
};

const MainLayout = ({ children }: TMainLayout) => (
  <Box>
    <Header />
    {children}
    <Footer />
  </Box>
);

export default MainLayout;
