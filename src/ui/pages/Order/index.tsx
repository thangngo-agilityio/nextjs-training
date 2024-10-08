'use client';

import { OrderSuccess } from '@/components';
import { Header } from '@/layouts';
import { OverviewSection } from '@/ui/section';

const OrderPage = () => (
  <>
    <Header />
    <OverviewSection />
    <OrderSuccess />
  </>
);

export default OrderPage;
