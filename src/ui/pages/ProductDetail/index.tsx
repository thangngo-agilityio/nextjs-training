import dynamic from 'next/dynamic';

const OverviewSection = dynamic(() => import('@/ui/section/Overview'));

const ProductDetail = () => (
  <>
    <OverviewSection title="Product detail" />
  </>
);

export default ProductDetail;
