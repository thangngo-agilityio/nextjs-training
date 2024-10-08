'use client';

import { useCallback } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

// Components
import { HeadingSection, ImageProduct, ProductInfo } from '@/components';

// Types
import { ICartItem, TProduct } from '@/types';

// Actions
import { updateMyCart } from '@/actions';
import { useCustomToast } from '@/hooks';
import { ROUTER, SUCCESS_MESSAGES } from '@/constants';
import { useRouter } from 'next/navigation';
const Header = dynamic(() => import('@/layouts/Header'));
const OverviewSection = dynamic(() => import('@/ui/section/Overview'));

type TProductDetail = {
  cartId: string;
  product?: TProduct;
  cartItems?: ICartItem[];
};

const ProductDetail = ({ cartId, product, cartItems = [] }: TProductDetail) => {
  const { showToast } = useCustomToast();
  const router = useRouter();

  console.log('cartItems', cartItems);

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
      itemExist.quantity = itemExist.quantity + 1;
    } else {
      newCartItems.push({ product, quantity: 1 });
    }

    const res = await updateMyCart(cartId, newCartItems);

    const { error } = res || {};

    if (error) {
      showToast(error);
    } else {
      showToast(SUCCESS_MESSAGES.ADD_CART, 'success');
    }
  }, [cartId, cartItems, product, productId, showToast]);

  const handleBuyNow = useCallback(async () => {
    handleAddToCart();

    return router.push(ROUTER.CART);
  }, [handleAddToCart, router]);

  return (
    <>
      <Header />
      <OverviewSection title="Product detail" />
      <Box px="67px" pb="610px">
        <HeadingSection title={category} />
        <Flex flexDir="row" gap="42px">
          <ImageProduct image={image} alt={name} />
          <ProductInfo
            title={name}
            price={price}
            description={description}
            onClickAddCard={handleAddToCart}
            onClickBuy={handleBuyNow}
          />
        </Flex>
      </Box>
    </>
  );
};

export default ProductDetail;
