import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Order',
  description:
    'This is the Order page in a comprehensive e-commerce web application designed to facilitate online shopping.',
};

const OrderPage = dynamic(() => import('@/ui/pages/Order'));

export default OrderPage;
