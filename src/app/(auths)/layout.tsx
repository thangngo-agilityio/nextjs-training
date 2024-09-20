import { Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <Stack
    h="100vh"
    bgImage="/images/background-auth.jpg"
    bgRepeat="no-repeat"
    bgSize="cover"
  >
    {children}
  </Stack>
);

export default AuthLayout;
