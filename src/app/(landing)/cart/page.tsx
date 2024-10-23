import { Metadata } from 'next';

// Components
import { CartPage, OverviewSection } from '@/ui';
import { Box, Container } from '@chakra-ui/react';
import { Suspense } from 'react';
import { HeadingSection, SkeletonCartList } from '@/components';

export const metadata: Metadata = {
  title: 'Cart',
  description:
    'This is the Cart page in a comprehensive e-commerce web application designed to facilitate online shopping.',
};

const Cart = () => (
  <Container maxW="100%" p={0}>
    <OverviewSection title="Cart page" />
    <Box
      px={{ base: '28px', lg: '67px' }}
      pt="20px"
      pb={{ base: '100px', lg: '500px' }}
    >
      <HeadingSection title="Cart" />

      <Suspense fallback={<SkeletonCartList length={2} />}>
        <CartPage />
      </Suspense>
    </Box>
  </Container>
);

export default Cart;
