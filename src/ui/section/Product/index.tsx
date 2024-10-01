'use client';

import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

// Component
import { ProductCard } from '@/components';
import { TProduct } from '@/types';

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
      <Grid
        px="94px"
        gap="29px"
        templateColumns={{ base: '', lg: 'repeat(4, 1fr)' }}
      >
        {productList.map((item) => (
          <GridItem key={item.id} mb="100px">
            <ProductCard
              image={item.image}
              title={item.name}
              price={item.price}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  </Flex>
);

export default ProductSection;
