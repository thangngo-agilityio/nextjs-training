'use client';

import { Suspense, useCallback, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

// Components
import { HeadingSection, SkeletonProductDetail } from '@/components';

// Actions
import { updateMyCart } from '@/actions';

// Hooks
import { useCustomToast } from '@/hooks';

// Types
import { ICartItem, TProduct } from '@/types';

// Constants
import { ROUTER, SUCCESS_MESSAGES } from '@/constants';

const OverviewSection = dynamic(() => import('@/ui/section/Overview'));
const ImageProduct = dynamic(() => import('@/components/ImageProduct'));
const ProductInfo = dynamic(() => import('@/components/ProductInfo'));

type TProductDetail = {
  cartId: string;
  product?: TProduct;
  cartItems?: ICartItem[];
};

const ProductDetail = ({ cartId, product, cartItems = [] }: TProductDetail) => {
  const [quantity, setQuantity] = useState(1);
  const { showToast } = useCustomToast();
  const router = useRouter();

  const {
    id: productId = '',
    image = [],
    name = '',
    price = 0,
    description = '',
    category = '',
  } = product || {};

  const handleAddToCart = useCallback(async () => {
    const newCartItems = [...cartItems];

    const itemExist = newCartItems.find((cartItem) => {
      const { product: productItem } = cartItem || {};
      const { id } = productItem || {};

      return id === productId;
    });

    if (itemExist) {
      itemExist.quantity = quantity;
    } else {
      newCartItems.push({ product, quantity: quantity });
    }

    const res = await updateMyCart(cartId, newCartItems);

    const { error } = res || {};

    if (error) {
      showToast(error);
    } else {
      showToast(SUCCESS_MESSAGES.ADD_CART, 'success');
    }
  }, [cartId, cartItems, product, productId, quantity, showToast]);

  const handleBuyNow = useCallback(async () => {
    handleAddToCart();

    return router.push(ROUTER.CART);
  }, [handleAddToCart, router]);

  return (
    <>
      <OverviewSection title="Product detail" />
      <Box
        px={{ base: '28px', lg: '67px' }}
        pb={{ base: '100px', lg: '610px' }}
      >
        <HeadingSection title={category} />
        <Suspense fallback={<SkeletonProductDetail />}>
          <Flex flexDir={{ base: 'column', lg: 'row' }} gap="42px">
            <ImageProduct image={image} alt={name} />
            <ProductInfo
              title={name}
              price={price}
              description={description}
              quantity={quantity}
              setQuantity={setQuantity}
              onClickAddCard={handleAddToCart}
              onClickBuy={handleBuyNow}
            />
          </Flex>
        </Suspense>
      </Box>
    </>
  );
};

export default ProductDetail;
