'use client';

import { ChangeEvent, useCallback, useTransition } from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDebounceCallback } from 'usehooks-ts';

// Components
import { Loading, UserDropdown } from '@/components';

// Icons
import { ArrowIcon, CartIcon, HeartIcon, LogoIcon, SearchIcon } from '@/icons';

// Constants
import { ROUTER } from '@/constants';

// Actions
import { logout } from '@/actions';

export type TSearchValue = {
  search: string;
};

type THeader = {
  searchValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Header = ({ searchValue, onChange }: THeader) => {
  const [isLogout, startTransition] = useTransition();
  const router = useRouter();

  const handleOnChange = useDebounceCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
    },
    500,
  );

  const handleLogout = useCallback(() => {
    startTransition(async () => {
      await logout();
      router.push(ROUTER.LOGIN);
    });
  }, [router]);
  return (
    <>
      {isLogout && <Loading />}
      <Flex justifyContent="center">
        <Flex
          w="100%"
          maxW="1512px"
          px="52px"
          pt="40px"
          pb="24px"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack w="100%" flexDirection="row" alignItems="center">
            <Box>
              <Link href={ROUTER.HOME} title="Home">
                <LogoIcon />
              </Link>
            </Box>
            <Stack flexDirection="row" alignItems="center">
              <Flex ml="36px" alignItems="center" gap={1}>
                <Text size="lg">Space Builder</Text>
                <Text variant="tertiary">(Coming soon)</Text>
                <ArrowIcon />
              </Flex>
              <Flex ml="40px" alignItems="center" gap={1}>
                <Text size="lg">Products</Text>
                <ArrowIcon />
              </Flex>
            </Stack>
            <Box ml="22px" width="30%">
              <InputGroup>
                <InputLeftElement>
                  <SearchIcon />
                </InputLeftElement>
                <Input
                  placeholder="Search for minimalist chair"
                  defaultValue={searchValue}
                  onChange={handleOnChange}
                  variant="search"
                  background="background.100"
                />
              </InputGroup>
            </Box>
          </Stack>
          <Stack flexDirection="row" alignItems="center" gap="32px">
            <HeartIcon />
            <Link href={ROUTER.CART}>
              <CartIcon />
            </Link>
            <UserDropdown onClick={handleLogout} />
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};
export default Header;
