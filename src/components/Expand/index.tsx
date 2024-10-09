import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  Link,
  Stack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

// Component
import {
  CartIcon,
  HamburgerIcon,
  HeartIcon,
  LineIcon,
  LogoIcon,
  Logout,
} from '@/icons';

// Constants
import { ROUTER } from '@/constants';

type TSidebarProps = {
  onClick?: () => void;
};

const ExpandSidebar = ({ onClick }: TSidebarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack>
      <Box onClick={onOpen} top="35px" left="10px">
        <HamburgerIcon />
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent alignItems="center" justifyContent="center">
          <DrawerCloseButton />
          <DrawerHeader>
            <Link href="/" as="h1" mb="27.5px">
              <LogoIcon />
            </Link>
            <LineIcon />
          </DrawerHeader>

          <DrawerBody w="100%" px="55px">
            <VStack gap="15px" alignItems="flex-start">
              <HStack
                w="100%"
                borderBottom="1px solid"
                borderColor="border.500"
                pb="10px"
              >
                <HeartIcon />
                <Heading>Favorites</Heading>
              </HStack>

              <HStack
                as={Link}
                href={ROUTER.CART}
                w="100%"
                borderBottom="1px solid"
                borderColor="border.500"
                pb="10px"
              >
                <CartIcon />
                <Heading>Cart</Heading>
              </HStack>

              <HStack
                w="100%"
                borderBottom="1px solid"
                borderColor="border.500"
                pb="10px"
                onClick={onClick}
                cursor="pointer"
              >
                <Logout />
                <Heading>Logout</Heading>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default ExpandSidebar;
