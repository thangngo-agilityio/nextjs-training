'use client';

import { useCallback, useTransition } from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebounceCallback } from 'usehooks-ts';

// Components
import { Expand, Loading, UserDropdown } from '@/components';

// Icons
import {
  ArrowIcon,
  CartIcon,
  HeartIcon,
  LogoIcon,
  LogoMobile,
  SearchIcon,
} from '@/icons';

// Constants
import { ROUTER, SEARCH_QUERIES } from '@/constants';

// Actions
import { logout } from '@/actions';

// Utils
import { getSearchParams, updateSearchParams } from '@/utils';

export type TSearchValue = {
  search: string;
};

const Header = () => {
  const [isLogout, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { replace } = useRouter();
  const router = useRouter();

  const isMobile = useBreakpointValue({ base: true, lg: false });

  const { name } = getSearchParams(searchParams);

  const handleOnChange = useDebounceCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const updatedParams = updateSearchParams(
        searchParams,
        SEARCH_QUERIES.NAME,
        value,
      );

      replace(`${pathname}?${updatedParams.toString()}`, { scroll: false });
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
      <Flex
        w="100%"
        justifyContent="center"
        position={isMobile ? 'absolute' : 'unset'}
        flexDir={isMobile ? 'column' : 'unset'}
        px={isMobile ? '20px' : '52px'}
      >
        <Flex
          w="100%"
          maxW="1512px"
          pt="40px"
          pb="24px"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack w="100%" flexDirection="row" alignItems="center">
            <Box ml={isMobile ? '-20px' : 'unset'}>
              <Link href={ROUTER.HOME} title="Home">
                {!isMobile ? <LogoIcon /> : <LogoMobile />}
              </Link>
            </Box>
            {!isMobile && (
              <>
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
                      defaultValue={name}
                      onChange={handleOnChange}
                      variant="search"
                      background="background.100"
                    />
                  </InputGroup>
                </Box>
              </>
            )}
          </Stack>
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
        </Flex>
        {isMobile && (
          <Box width="100%">
            <InputGroup>
              <InputLeftElement>
                <SearchIcon />
              </InputLeftElement>
              <Input
                placeholder="Search for minimalist chair"
                defaultValue={name}
                onChange={handleOnChange}
                variant="search"
                background="background.100"
              />
            </InputGroup>
          </Box>
        )}
      </Flex>
    </>
  );
};
export default Header;
