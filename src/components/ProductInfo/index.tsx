import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Fragment, useCallback, useState } from 'react';

// Utils
import { formatAmountNumber } from '@/utils';

// Icons
import { MinusIcon, PlusIcon } from '@/icons';
import CardBenefit from '../CardBenefit';
import { BENEFIT_LIST } from '@/constants';

type TProductInfo = {
  title: string;
  price: number;
  length?: string;
  width?: string;
  description?: string;
};

const ProductInfo = ({
  title,
  description,
  length,
  width,
  price,
}: TProductInfo) => {
  const [quantity, setQuantity] = useState(1);
  // Handle change quantity
  const onChange = useCallback((operation: 'increment' | 'decrement') => {
    setQuantity((prevQuantity) =>
      operation === 'increment' ? prevQuantity + 1 : prevQuantity - 1,
    );
  }, []);

  const handleDecrement = useCallback(async () => {
    onChange('decrement');
  }, [onChange]);

  const handleIncrement = useCallback(async () => {
    onChange('increment');
  }, [onChange]);

  return (
    <Flex>
      <Heading size="size6xl" variant="quinary" mb="5px">
        {title}
      </Heading>
      <Text size="text2Xl" variant="senary" mb="30px">
        {description}
      </Text>
      <VStack mb="30px">
        <Heading variant="productTitle" size="size2xl">
          Dimension:
        </Heading>
        <Box>
          <Text variant="senary" size="text2Xl">
            {length},{' '}
          </Text>
          <Text variant="tertiary" size="text2Xl">
            {width}
          </Text>
        </Box>
      </VStack>

      <Box
        borderTopWidth="1px"
        borderBottomWidth="1px"
        borderColor="border.300"
        mb="28px"
      >
        <Heading size="size9xl" variant="quinary">
          N{formatAmountNumber(price?.toString())}
        </Heading>
      </Box>

      <Flex flexDir="row" mb="44px">
        <VStack>
          <Heading variant="quaternary" size="lg" mb="20px">
            Quantity available
          </Heading>
          <HStack>
            <Button
              variant="quantity"
              size="quantity"
              data-testid="btn-decrement"
              onClick={handleDecrement}
              isDisabled={quantity === 1}
            >
              <MinusIcon />
            </Button>
            <Text variant="quantity">{quantity}</Text>
            <Button
              variant="quantity"
              size="quantity"
              onClick={handleIncrement}
              data-testid="btn-increment"
            >
              <PlusIcon />
            </Button>
          </HStack>
        </VStack>
        <VStack>
          <Heading mb="20px" variant="quaternary" size="lg">
            Color:
          </Heading>
          <HStack>
            <Box
              w="36px"
              h="36px"
              borderRadius="100%"
              bgColor="background.1400"
            />
            <Box
              w="36px"
              h="36px"
              borderRadius="100%"
              bgColor="background.1500"
            />
            <Box
              w="36px"
              h="36px"
              borderRadius="100%"
              bgColor="background.1600"
            />
          </HStack>
        </VStack>
      </Flex>

      <Grid
        flexDirection="row"
        gap="92px"
        mb="40px"
        px="104px"
        templateColumns={{ base: '', lg: 'repeat(2, 1fr)' }}
      >
        {BENEFIT_LIST.map((item) => {
          const IconComponent = item.icon || Fragment;
          return (
            <GridItem key={item.id}>
              <CardBenefit
                icon={<IconComponent />}
                title={item.title}
                text={item.text}
              />
            </GridItem>
          );
        })}
      </Grid>

      <Heading variant="quinary" size="size9xl" mb="58px">
        Delivery Fee: N3,000-N5000
      </Heading>

      <VStack>
        <Button size="productDetail" variant="buy">
          Buy now
        </Button>
        <Button size="productDetail" variant="cart" ml="30px">
          Add to cart
        </Button>
      </VStack>
    </Flex>
  );
};

export default ProductInfo;
