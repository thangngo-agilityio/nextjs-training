'use client';
import { Stack, useBreakpointValue } from '@chakra-ui/react';
import { useCallback, useTransition } from 'react';
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

const Navigation = () => {
  const [isLogout, startTransition] = useTransition();

  const router = useRouter();

  const isMobile = useBreakpointValue({ base: true, lg: false });

  const handleLogout = useCallback(() => {
    startTransition(async () => {
      await logout();
      router.push(ROUTER.LOGIN);
    });
  }, [router]);
  return (
    <>
      {!isMobile ? (
        <Stack flexDirection="row" alignItems="center" gap="32px">
          <HeartIcon />
          <Link href={ROUTER.CART}>
            <CartIcon />
          </Link>
          <UserDropdown onClick={handleLogout} />
        </Stack>
      ) : (
        <Expand onClick={handleLogout} />
      )}

      {isLogout && <LoadingIndicator />}
    </>
  );
};

export default Navigation;
