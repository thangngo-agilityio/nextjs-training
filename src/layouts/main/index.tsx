import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

// Layouts
import Footer from '../Footer';

type TMainLayout = {
  children: ReactNode;
};

const MainLayout = ({ children }: TMainLayout) => (
  <Box>
    {children}
    <Footer />
  </Box>
);

export default MainLayout;
