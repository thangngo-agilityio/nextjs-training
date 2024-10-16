import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
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
  totalQuantity: number;
  onClick?: () => void;
};

const ExpandSidebar = ({ totalQuantity, onClick }: TSidebarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack>
      <Box
        onClick={onOpen}
        top="35px"
        left="10px"
        data-testid="button-hamburger"
      >
        <HamburgerIcon />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        data-testid="button-close"
      >
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
                <Heading>Cart</Heading>
              </HStack>

              <HStack
                w="100%"
                borderBottom="1px solid"
                borderColor="border.500"
                pb="10px"
                onClick={onClick}
                cursor="pointer"
                data-testid="button-logout"
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
