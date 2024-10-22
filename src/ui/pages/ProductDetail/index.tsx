import { Suspense } from 'react';
import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

// Components
import { HeadingSection, SkeletonProductDetail } from '@/components';

// Types
import { ICartItem, TProduct } from '@/types';

// Constants

const OverviewSection = dynamic(() => import('@/ui/section/Overview'));
const ProductInfo = dynamic(() => import('@/components/ProductInfo'));

type TProductDetail = {
  cartId: string;
  product?: TProduct;
  cartItems?: ICartItem[];
};

const ProductDetail = ({ cartId, product, cartItems = [] }: TProductDetail) => {
  const { category = '' } = product || {};
  return (
    <>
      <OverviewSection title="Product detail" />
      <Box
        px={{ base: '28px', lg: '67px' }}
        pb={{ base: '100px', lg: '610px' }}
      >
        <HeadingSection title={category} />
        <Suspense fallback={<SkeletonProductDetail />}>
          <ProductInfo
            product={product}
            cartId={cartId}
            cartItems={cartItems}
          />
        </Suspense>
      </Box>
    </>
  );
};

export default ProductDetail;
