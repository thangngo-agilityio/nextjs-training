'use client';

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Dispatch, Fragment, SetStateAction, useCallback } from 'react';

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
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  onClickBuy: () => void;
  onClickAddCard: () => void;
};

const ProductInfo = ({
  title,
  description,
  price,
  quantity,
  setQuantity,
  onClickBuy,
  onClickAddCard,
}: TProductInfo) => {
  // Handle change quantity
  const onChange = useCallback(
    (operation: 'increment' | 'decrement') => {
      setQuantity((prevQuantity) =>
        operation === 'increment' ? prevQuantity + 1 : prevQuantity - 1,
      );
    },
    [setQuantity],
  );

  const handleDecrement = useCallback(async () => {
    onChange('decrement');
  }, [onChange]);

  const handleIncrement = useCallback(async () => {
    onChange('increment');
  }, [onChange]);

  return (
    <Stack flexDir="column" flex={1}>
      <Heading
        size={{ base: 'size4xl', lg: 'size6xl' }}
        variant="quinary"
        mb="5px"
      >
        {title}
      </Heading>
      <Text
        size={{ base: 'textMd', lg: 'text2Xl' }}
        variant="senary"
        mb={{ base: '10px', lg: '30px' }}
      >
        {description}
      </Text>
      <VStack mb={{ base: '10px', lg: '30px' }} alignItems="flex-start">
        <Heading variant="productTitle" size="size2xl">
          Dimension:
        </Heading>
        <Flex flexDir="row" gap="5px">
          <Text variant="senary" size={{ base: 'textMd', lg: 'text2Xl' }}>
            Length-34cm,
          </Text>
          <Text variant="tertiary" size={{ base: 'textMd', lg: 'text2Xl' }}>
            Width-56cm
          </Text>
        </Flex>
      </VStack>

      <Box
        borderTopWidth="1px"
        borderBottomWidth="1px"
        borderColor="border.300"
        mb="28px"
      >
        <Heading size="size9xl" variant="quinary" py="10px">
          N{formatAmountNumber(price?.toString())}
        </Heading>
      </Box>

      <Stack flexDir="row" mb="44px" gap="60px">
        <VStack alignItems="flex-start">
          <Heading variant="quaternary" size="lg" mb="20px">
            Quantity available
          </Heading>
          <HStack gap="20px">
            <Button
              variant="quantity"
              size="quantity"
              data-testid="btn-decrement"
              onClick={handleDecrement}
              isDisabled={quantity === 1}
              aria-label="Minus button"
            >
              <MinusIcon />
            </Button>
            <Text variant="quantity">{quantity}</Text>
            <Button
              variant="quantity"
              size="quantity"
              onClick={handleIncrement}
              data-testid="btn-increment"
              aria-label="Plus button"
            >
              <PlusIcon />
            </Button>
          </HStack>
        </VStack>
        <VStack alignItems="flex-start">
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
      </Stack>

      <Grid
        flexDirection="row"
        gap={{ base: '20px', lg: '92px' }}
        mb={{ base: '20px', lg: '40px' }}
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

      <Heading
        variant="quinary"
        size="size2xl"
        mb={{ base: '25px', lg: '58px' }}
      >
        Delivery Fee: N3,000-N5000
      </Heading>

      <Stack
        flexDir={{ base: 'column', lg: 'row' }}
        gap={{ base: '20px', lg: 'unset' }}
      >
        <Button
          size={{ base: 'xl', lg: 'productDetail' }}
          variant="buy"
          onClick={onClickBuy}
        >
          Buy now
        </Button>
        <Button
          size={{ base: 'xl', lg: 'productDetail' }}
          variant="cart"
          ml={{ base: 'unset', lg: '30px' }}
          onClick={onClickAddCard}
        >
          Add to cart
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProductInfo;
