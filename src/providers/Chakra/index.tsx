'use client';
import { ReactNode } from 'react';
import { ChakraProvider as ChakraUIProvider } from '@chakra-ui/react';

// Customize themes
import { theme } from '@/themes';

const ChakraProvider = ({ children }: { children?: ReactNode }) => (
  <ChakraUIProvider theme={theme}>{children}</ChakraUIProvider>
);

export default ChakraProvider;
