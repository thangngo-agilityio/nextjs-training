import { ROUTER } from '@/constants';
import { SuccessIcon } from '@/icons';
import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const OrderSuccess = () => (
  <VStack
    pt="202px"
    px={{ base: '28px', lg: 'unset' }}
    pb={{ base: '100px', lg: '468px' }}
    alignItems="center"
    justifyContent="center"
    textAlign={{ base: 'center', lg: 'unset' }}
  >
    <SuccessIcon />
    <Heading variant="orderSuccess" size="size5xl" mb="10px">
      Your Order has been accepted
    </Heading>
    <Text size="textXl" variant="orderSuccess" mb="70px">
      Your item is being processed! A confirmation email will be sent to you!
    </Text>
    <Button
      as={Link}
      href={ROUTER.HOME}
      variant="orderSuccess"
      size={{ base: 'xl', lg: 'orderSuccess' }}
    >
      Back home
    </Button>
  </VStack>
);

export default OrderSuccess;
