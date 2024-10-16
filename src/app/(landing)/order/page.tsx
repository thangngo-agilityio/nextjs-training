import { Metadata } from 'next';

// Components
import { OrderSuccess } from '@/components';

// Layouts
import { Header } from '@/layouts';

export const metadata: Metadata = {
  title: 'Order',
  description:
    'This is the Order page in a comprehensive e-commerce web application designed to facilitate online shopping.',
};

const OrderPage = () => (
  <>
    <Header />
    <OrderSuccess />
  </>
);

export default OrderPage;
