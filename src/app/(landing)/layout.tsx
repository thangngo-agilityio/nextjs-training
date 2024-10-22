import { Header } from '@/layouts';
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
    {children}
    <Footer />
  </>
);

export default AuthLayout;
