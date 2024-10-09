'use client';

import { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

// Actions
import { updateMyCart } from '@/actions';

// hooks
import { useCustomToast } from '@/hooks';

// Types
import { ICartItem } from '@/types';

// Utils
import { calculateTotalPrice } from '@/utils';

// Components
import {
  CartItem,
  HeadingSection,
  SkeletonProductList,
  TotalCart,
} from '@/components';
import { ROUTER, SUCCESS_MESSAGES } from '@/constants';
const OverviewSection = dynamic(() => import('@/ui/section/Overview'));

type TCartPage = {
  cartItem: ICartItem[];
  cartId: string;
};

const CartPage = ({ cartItem, cartId }: TCartPage) => {
  const [isDisable, setIsDisable] = useState(false);
  const total = useMemo(() => calculateTotalPrice(cartItem), [cartItem]);
  const { showToast } = useCustomToast();
  const router = useRouter();

  useEffect(() => {
    if (cartItem.length === 0) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [cartItem]);

  const handleRemoveItem = useCallback(
    async (productId: string) => {
      const newCartItems = cartItem.filter((Item) => {
        const { product } = Item || {};
        const { id } = product || {};

        return id !== productId;
      });
      const res = await updateMyCart(cartId, newCartItems);

      const { error } = res || {};

      if (error) {
        showToast(error);
      } else {
        showToast(SUCCESS_MESSAGES.DELETE_CART_ITEM, 'success');
      }
    },
    [cartId, cartItem, showToast],
  );

  const handleCheckout = useCallback(async () => {
    const res = await updateMyCart(cartId, []);

    const { error } = res || {};

    if (error) {
      showToast(error);
    } else {
      showToast(SUCCESS_MESSAGES.CHECKOUT, 'success');
    }

    return router.push(ROUTER.ORDER);
  }, [cartId, showToast, router]);

  return (
    <>
      <OverviewSection title="Cart" />
      <Stack px="67px" pt="20px" pb="500px">
        <HeadingSection title="Cart" />
        <Flex flexDir="column" mb="90px">
          {cartItem.map((cart) => {
            const { product, quantity } = cart || {};
            const {
              id = '',
              name = '',
              image = [],
              description = '',
              price = 0,
            } = product || {};

            const total = price * quantity;
            return (
              <Suspense
                key={name}
                fallback={<SkeletonProductList length={1} />}
              >
                <Box
                  mb="36px"
                  pb="54px"
                  borderBottom="1px solid"
                  borderColor="border.500"
                  _last={{
                    mb: 'unset',
                    pb: 'unset',
                    borderBottom: 'unset',
                    borderColor: 'unset',
                  }}
                >
                  <CartItem
                    id={id}
                    title={name}
                    image={image}
                    description={description}
                    price={total}
                    quantity={quantity}
                    onRemoveItem={handleRemoveItem}
                  />
                </Box>
              </Suspense>
            );
          })}
        </Flex>
        <TotalCart
          total={total}
          onClick={handleCheckout}
          isDisable={isDisable}
        />
      </Stack>
    </>
  );
};

export default CartPage;
