import { formatAmountNumber } from '@/utils';
import { Button, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';

type TTotalCart = {
  total: number;
  onClick: () => void;
};

const TotalCart = ({ total, onClick }: TTotalCart) => (
  <Stack flexDir="row" justifyContent="space-between">
    <VStack alignItems="flex-start">
      <HStack gap="15px">
        <Heading variant="productTitle" size="size7xl">
          Total:
        </Heading>
        <Text variant="totalCart" size="text10xl">
          N{formatAmountNumber(total.toString())}
        </Text>
      </HStack>
      <Text variant="septenary" size="text4Xl">
        Delivery exclusive
      </Text>
    </VStack>
    <Button variant="checkout" size="size4xlSecond" onClick={onClick}>
      Checkout
    </Button>
  </Stack>
);

export default TotalCart;
