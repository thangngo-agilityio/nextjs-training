import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

// Layouts
import dynamic from 'next/dynamic';

const FooterSection = dynamic(() => import('@/layouts/Footer'));

type TMainLayout = {
  children: ReactNode;
};

const MainLayout = ({ children }: TMainLayout) => (
  <Box>
    {children}
    <FooterSection />
  </Box>
);

export default MainLayout;
