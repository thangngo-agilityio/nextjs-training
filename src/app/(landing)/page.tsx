import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'This is the Home page in a comprehensive e-commerce web application designed to facilitate online shopping.',
};

// Pages
const homePage = dynamic(() => import('@/ui/pages/Home'));

export default homePage;
