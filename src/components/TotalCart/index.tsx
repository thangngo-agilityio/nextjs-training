'use client';

import { Button, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

// Actions
import { updateMyCart } from '@/actions';

// hooks
import { useCustomToast } from '@/hooks';

// Constants
import { ROUTER, SUCCESS_MESSAGES } from '@/constants';

// Types
import { ICartItem } from '@/types';

// Utils
import { calculateTotalPrice, formatAmountNumber } from '@/utils';

type TTotalCart = {
  cartItem: ICartItem[];
  cartId: string;
};

const TotalCart = ({ cartItem, cartId }: TTotalCart) => {
  const [isDisable, setIsDisable] = useState(false);
  const { showToast } = useCustomToast();
  const router = useRouter();

  const total = useMemo(() => calculateTotalPrice(cartItem), [cartItem]);

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

  useEffect(() => {
    if (cartItem.length === 0) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [cartItem]);

  return (
    <Stack
      flexDir={{ base: 'column', lg: 'row' }}
      justifyContent="space-between"
    >
      <VStack alignItems="flex-start" mb={{ base: '20px', lg: 'unset' }}>
        <HStack gap="15px">
          <Heading
            variant="productTitle"
            size={{ base: 'size4xl', lg: 'size7xl' }}
          >
            Total:
          </Heading>
          <Text variant="totalCart" size={{ base: 'text4Xl', lg: 'text10xl' }}>
            N{formatAmountNumber(total.toString())}
          </Text>
        </HStack>
        <Text variant="septenary" size={{ base: 'text2Xl', lg: 'text4Xl' }}>
          Delivery exclusive
        </Text>
      </VStack>
      <Button
        variant="checkout"
        size={{ base: 'xl', lg: 'size4xlSecond' }}
        onClick={handleCheckout}
        isDisabled={isDisable}
      >
        Checkout
      </Button>
    </Stack>
  );
};

export default TotalCart;
