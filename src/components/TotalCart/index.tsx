import { formatAmountNumber } from '@/utils';
import { Button, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';

type TTotalCart = {
  total: number;
  isDisable: boolean;
  onClick: () => void;
};

const TotalCart = ({ total, isDisable, onClick }: TTotalCart) => (
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
    <Button
      variant="checkout"
      size="size4xlSecond"
      onClick={onClick}
      isDisabled={isDisable}
    >
      Checkout
    </Button>
  </Stack>
);

export default TotalCart;
