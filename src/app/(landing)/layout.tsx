import { ReactNode } from 'react';

// layouts
import { Footer } from '@/layouts';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <>
    {children}
    <Footer />
  </>
);

export default AuthLayout;
