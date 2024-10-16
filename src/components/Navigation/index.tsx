'use client';

import { Box, Flex, Hide, Show, Stack, Text } from '@chakra-ui/react';
import { useCallback, useMemo, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Components
import UserDropdown from '../UserDropdown';
import { Expand, LoadingIndicator } from '..';

// Actions
import { logout } from '@/actions';

// Constants
import { ROUTER } from '@/constants';

// Icons
import { CartIcon, HeartIcon } from '@/icons';

// Utils
import { calculateTotalQuantity } from '@/utils';

// Types
import { ICartItem } from '@/types';

type TNavigation = {
  cartItem: ICartItem[];
};

const Navigation = ({ cartItem }: TNavigation) => {
  const [isLogout, startTransition] = useTransition();

  const router = useRouter();

  const totalQuantity = useMemo(
    () => calculateTotalQuantity(cartItem),
    [cartItem],
  );

  const handleLogout = useCallback(() => {
    startTransition(async () => {
      await logout();
      router.push(ROUTER.LOGIN);
    });
  }, [router]);
  return (
    <>
      <Show above="lg">
        <Stack flexDirection="row" alignItems="center" gap="32px">
          <HeartIcon />
          <Link href={ROUTER.CART}>
            <Box
              position="relative"
              opacity={1}
              transition=".2s ease-in"
              _hover={{ opacity: '.8' }}
            >
              <CartIcon />
              <Flex
                w="20px"
                h="20px"
                bgColor="background.1800"
                borderRadius="100%"
                alignItems="center"
                justifyContent="center"
                position="absolute"
                top={-3}
                right={-3}
              >
                <Text size="textMd" variant="secondary">
                  {totalQuantity}
                </Text>
              </Flex>
            </Box>
          </Link>
          <UserDropdown onClick={handleLogout} />
        </Stack>
      </Show>

      <Hide above="lg">
        <Expand totalQuantity={totalQuantity} onClick={handleLogout} />
      </Hide>

      {isLogout && <LoadingIndicator />}
    </>
  );
};

export default Navigation;
