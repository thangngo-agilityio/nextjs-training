'use client';

import { Flex, Stack } from '@chakra-ui/react';
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
    <Stack px="67px" pb="500px">
      <HeadingSection title="Cart" />
      <Flex flexDir="column">
        {cartItem.map((cart) => {
          const { product } = cart || {};
          const {
            name = '',
            image = [],
            description = '',
            price = 0,
          } = product || {};
          return (
            <CartItem
              key={name}
              title={name}
              image={image}
              description={description}
              price={price}
              onClick={() => {}}
            />
          );
        })}
      </Flex>
    </Stack>
  </>
);

export default CartPage;
