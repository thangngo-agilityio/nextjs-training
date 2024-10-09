'use client';

import { Fragment, Suspense } from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  RadioGroup,
  Text,
} from '@chakra-ui/react';

// Components
import {
  CardBenefit,
  ItemCategory,
  ProductCard,
  SkeletonProductList,
} from '@/components';

// Constants
import { BENEFIT_LIST, MENU_ITEM_FILTER, ROUTER } from '@/constants';

// Types
import { TProduct } from '@/types';
import Link from 'next/link';

type TTrendingSection = {
  productList: TProduct[];
};

const TrendingSection = ({ productList }: TTrendingSection) => (
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
              key={item.id}
            >
              <ItemCategory
                value={item.value}
                title={item.itemContent}
                icon={<IconComponent />}
                iconActive={<IconActiveComponent />}
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

      <Flex mb="136px" flexDir="column" alignItems="center">
        <Flex
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          mb="30px"
        >
          <Heading mb="10px" size="size7xl" variant="quinary">
            Top Trending
          </Heading>
          <Text maxW="797px" variant="septenary" size="text2Xl" mb="10px">
            Find a bright ideal to suit your taste with our great selection of
            suspension, wall, floor and table lights.
          </Text>
          <Box w="98px" h="5px" bgColor="background.300" />
        </Flex>
        <Button as={Link} size="md" variant="showroom" href={ROUTER.PRODUCT}>
          See more
        </Button>
      </Flex>

      <Grid
        px="94px"
        gap="29px"
        rowGap="120px"
        templateColumns={{ base: '', lg: 'repeat(4, 1fr)' }}
        mb="40px"
      >
        <Suspense fallback={<SkeletonProductList length={4} />}>
          {productList.map((item) => (
            <GridItem key={item.id}>
              <ProductCard
                id={item.id}
                image={item.image[0]}
                title={item.name}
                price={item.price}
              />
            </GridItem>
          ))}
        </Suspense>
      </Grid>
    </Flex>
  </Flex>
);

export default TrendingSection;
