'use client';

import { Box, Flex } from '@chakra-ui/react';
import { useCallback } from 'react';

// Actions
import { updateMyCart } from '@/actions';

// Components
import { CartItem } from '@/components';

// Hooks
import { useCustomToast } from '@/hooks';

// Constants
import { SUCCESS_MESSAGES } from '@/constants';

// Types
import { ICartItem } from '@/types';

type TCartList = {
  cartItem: ICartItem[];
  cartId: string;
};

const CartList = ({ cartItem, cartId }: TCartList) => {
  const { showToast } = useCustomToast();

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
  return (
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
            key={id}
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
        );
      })}
    </Flex>
  );
};

export default CartList;
