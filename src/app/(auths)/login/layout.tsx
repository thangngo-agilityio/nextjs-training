import { Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <Stack bgImage="/images/background-auth.jpg">{children}</Stack>
);

export default AuthLayout;
