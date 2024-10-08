'use client';

import { Box, Flex, Stack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

// Types
import { ICartItem } from '@/types';

// Components
import { CartItem, HeadingSection, TotalCart } from '@/components';
import { useMemo } from 'react';
import { calculateTotalPrice } from '@/utils';
const Header = dynamic(() => import('@/layouts/Header'));
const OverviewSection = dynamic(() => import('@/ui/section/Overview'));

type TCartPage = {
  cartItem: ICartItem[];
};

const CartPage = ({ cartItem }: TCartPage) => {
  const total = useMemo(() => calculateTotalPrice(cartItem), [cartItem]);
  return (
    <>
      <Header />
      <OverviewSection title="Cart" />
      <Stack px="67px" pt="20px" pb="500px">
        <HeadingSection title="Cart" />
        <Flex flexDir="column" mb="90px">
          {cartItem.map((cart) => {
            const { product, quantity } = cart || {};
            const {
              name = '',
              image = [],
              description = '',
              price = 0,
            } = product || {};

            const total = price * quantity;
            return (
              <Box
                key={name}
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
                  title={name}
                  image={image}
                  description={description}
                  price={total}
                  quantity={quantity}
                  onClick={() => {}}
                />
              </Box>
            );
          })}
        </Flex>
        <TotalCart total={total} onClick={() => {}} />
      </Stack>
    </>
  );
};

export default CartPage;
