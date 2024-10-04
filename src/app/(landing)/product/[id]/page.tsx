import dynamic from 'next/dynamic';

const ProductDetail = dynamic(() => import('@/ui/pages/ProductDetail'));

export default ProductDetail;
