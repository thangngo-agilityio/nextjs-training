import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

// layouts
const MainLayout = dynamic(() => import('@/layouts/main'));

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <>
    <MainLayout>{children}</MainLayout>
  </>
);

export default AuthLayout;
