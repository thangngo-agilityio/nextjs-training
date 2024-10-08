'use client';

import { Box, Flex, Stack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

// Types
import { ICartItem } from '@/types';

// Components
import { CartItem, HeadingSection } from '@/components';
const Header = dynamic(() => import('@/layouts/Header'));
const OverviewSection = dynamic(() => import('@/ui/section/Overview'));

type TCartPage = {
  cartItem: ICartItem[];
};

const CartPage = ({ cartItem }: TCartPage) => (
  <>
    <Header />
    <OverviewSection title="Cart" />
    <Stack px="67px" pt="20px" pb="500px">
      <HeadingSection title="Cart" />
      <Flex flexDir="column">
        {cartItem.map((cart) => {
          const { product, quantity } = cart || {};
          const {
            name = '',
            image = [],
            description = '',
            price = 0,
          } = product || {};
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
                price={price}
                quantity={quantity}
                onClick={() => {}}
              />
            </Box>
          );
        })}
      </Flex>
    </Stack>
  </>
);

export default CartPage;
