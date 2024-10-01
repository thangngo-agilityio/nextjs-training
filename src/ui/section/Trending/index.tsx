'use client';

import { Fragment, useMemo, useState } from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  RadioGroup,
  Text,
} from '@chakra-ui/react';

// Components
import { CardBenefit, ItemCategory, ProductCard } from '@/components';

// Constants
import { BENEFIT_LIST, MENU_ITEM_FILTER } from '@/constants';

// Types
import { TProduct } from '@/types';

type TTrendingSection = {
  productList: TProduct[];
};

const TrendingSection = ({ productList }: TTrendingSection) => {
  const [filter, setFilter] = useState<string>('');

  const productFilter = useMemo(
    () =>
      productList.filter(({ category }) => category.trim().includes(filter)),
    [filter, productList],
  );

  console.log('filter', filter);

  return (
    <Flex justifyContent="center" alignItems="center" px="94px">
      <Flex
        flexDir="column"
        maxW="1512px"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          width="73%"
          px="145px"
          pt="20px"
          pb="26px"
          bgColor="background.800"
          boxShadow="0 11px 30px 4px rgba(0, 0, 0, 7%)"
          gap="75px"
          justifyContent="center"
          alignItems="center"
          mt="-60px"
          mb="46px"
        >
          {MENU_ITEM_FILTER.map((item) => {
            const IconComponent = item.icon || Fragment;
            const IconActiveComponent = item.iconActive || Fragment;
            return (
              <RadioGroup
                flexDirection="column"
                alignItems="center"
                cursor="pointer"
                onChange={setFilter}
                value={filter}
                key={item.id}
              >
                <ItemCategory
                  value={item.value}
                  title={item.itemContent}
                  filter={filter}
                  icon={<IconComponent />}
                  iconActive={<IconActiveComponent />}
                  onClick={setFilter}
                />
              </RadioGroup>
            );
          })}
        </Flex>

        <Flex flexDirection="row" gap="92px" mb="98px" px="104px">
          {BENEFIT_LIST.map((item) => {
            const IconComponent = item.icon || Fragment;
            return (
              <CardBenefit
                key={item.id}
                icon={<IconComponent />}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </Flex>

        <Flex mb="166px">
          <Flex flexDirection="column" alignItems="center" textAlign="center">
            <Heading mb="10px" size="size7xl" variant="quinary">
              Top Trending
            </Heading>
            <Text maxW="797px" variant="septenary" size="text2Xl" mb="10px">
              Find a bright ideal to suit your taste with our great selection of
              suspension, wall, floor and table lights.
            </Text>
            <Box w="98px" h="5px" bgColor="background.300" />
          </Flex>
        </Flex>

        <Grid
          px="94px"
          gap="29px"
          templateColumns={{ base: '', lg: 'repeat(4, 1fr)' }}
        >
          {productFilter.map((item) => (
            <GridItem key={item.id} mb="100px">
              <ProductCard
                image={item.image}
                title={item.name}
                price={item.price}
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default TrendingSection;
