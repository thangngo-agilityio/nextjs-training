import dynamic from 'next/dynamic';

const OrderPage = dynamic(() => import('@/ui/pages/Order'));

export default OrderPage;
