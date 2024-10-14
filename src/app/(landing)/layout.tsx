import { ReactNode } from 'react';

// layouts
import { MainLayout } from '@/layouts';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <>
    <MainLayout>{children}</MainLayout>
  </>
);

export default AuthLayout;
