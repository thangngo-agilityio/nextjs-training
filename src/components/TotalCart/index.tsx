import { formatAmountNumber } from '@/utils';
import { Button, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';

type TTotalCart = {
  total: number;
  isDisable: boolean;
  onClick: () => void;
};

const TotalCart = ({ total, isDisable, onClick }: TTotalCart) => (
  <Stack flexDir={{ base: 'column', lg: 'row' }} justifyContent="space-between">
    <VStack alignItems="flex-start" mb={{ base: '20px', lg: 'unset' }}>
      <HStack gap="15px">
        <Heading
          variant="productTitle"
          size={{ base: 'size4xl', lg: 'size7xl' }}
        >
          Total:
        </Heading>
        <Text variant="totalCart" size={{ base: 'text4Xl', lg: 'text10xl' }}>
          N{formatAmountNumber(total.toString())}
        </Text>
      </HStack>
      <Text variant="septenary" size={{ base: 'text2Xl', lg: 'text4Xl' }}>
        Delivery exclusive
      </Text>
    </VStack>
    <Button
      variant="checkout"
      size={{ base: 'xl', lg: 'size4xlSecond' }}
      onClick={onClick}
      isDisabled={isDisable}
    >
      Checkout
    </Button>
  </Stack>
);

export default TotalCart;
