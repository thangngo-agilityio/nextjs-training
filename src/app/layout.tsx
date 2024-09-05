import type { Metadata } from 'next';
import { lufga } from '@/ui/fonts';

// Components
import Header from '@/layouts/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description: 'Next.js 14+ boilerplate app',
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
      <body className={lufga.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
