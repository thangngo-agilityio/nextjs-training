import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { NextUIProvider } from '@nextui-org/system';

// Components
import './globals.css';

// Providers
const ChakraProvider = dynamic(() => import('@/providers/Chakra'));

export const metadata: Metadata = {
  title: 'minifurs',
  description: 'E-commerce app',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
