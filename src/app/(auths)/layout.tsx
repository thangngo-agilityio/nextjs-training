import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <Box
    h="100vh"
    bgImage="/images/background.png"
    bgRepeat="no-repeat"
    bgSize="cover"
  >
    {children}
  </Box>
);

export default AuthLayout;
