'use client';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { CloseIcon } from '@chakra-ui/icons';

// Constants
import { ROUTER } from '@/constants/router';

// Icons
import { ArrowIcon, CartIcon, HeartIcon, LogoIcon, SearchIcon } from '@/icons';
import { Avatar, InputField } from '@/components';

const Header = () => (
  <Stack
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
        <InputField
          placeholder="Search for minimalist chair"
          onChange={() => {}}
          variant="search"
          leftIcon={<SearchIcon />}
          rightIcon={
            <CloseIcon as="button" color="text.200" onClick={() => {}} />
          }
          background="background.100"
        />
      </Box>
    </Stack>
    <Stack flexDirection="row" alignItems="center" gap="32px">
      <HeartIcon />
      <CartIcon />
      <Avatar />
    </Stack>
  </Stack>
);

export default Header;
