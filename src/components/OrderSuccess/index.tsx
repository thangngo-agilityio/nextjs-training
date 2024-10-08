import { ROUTER } from '@/constants';
import { SuccessIcon } from '@/icons';
import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const OrderSuccess = () => (
  <VStack pt="202px" pb="468px" alignItems="center" justifyContent="center">
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
      size="orderSuccess"
    >
      Back home
    </Button>
  </VStack>
);

export default OrderSuccess;
