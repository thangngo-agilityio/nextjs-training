import { Stack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

// layouts
const MainLayout = dynamic(() => import('@/layouts/main'));

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <Stack>
    <MainLayout>{children}</MainLayout>
  </Stack>
);

export default AuthLayout;
