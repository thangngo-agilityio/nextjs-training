'use client';

import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

// Component
import { ProductCard, SkeletonProductList } from '@/components';
import { TProduct } from '@/types';
import { Suspense } from 'react';

type TProductSection = {
  productList: TProduct[];
};

const ProductSection = ({ productList }: TProductSection) => (
  <Flex pt="148px" pb="416px" justifyContent="center">
    <Box maxW="1512px">
      <Flex px="104px" mb="165px">
        <Heading maxW="340px" variant="product" size="size8xl">
          We Have Some Awesome Products.
        </Heading>
        <Text ml="118px" maxW="518px" size="textLg" variant="productPrimary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s,
        </Text>
      </Flex>
      <Suspense fallback={<SkeletonProductList length={4} />}>
        <Grid
          px="94px"
          gap="29px"
          rowGap="120px"
          templateColumns={{ base: '', lg: 'repeat(4, 1fr)' }}
          mb="20px"
        >
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
        </Grid>
      </Suspense>
    </Box>
  </Flex>
);

export default ProductSection;
