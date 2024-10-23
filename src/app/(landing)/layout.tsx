import { Header } from '@/layouts';
import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

// layouts
const Footer = dynamic(() => import('@/layouts/Footer'));

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <>
    <Header />
    <Box>{children}</Box>
    <Footer />
  </>
);

export default AuthLayout;
