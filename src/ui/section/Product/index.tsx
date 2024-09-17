import { Box, Flex, Heading, Text } from '@chakra-ui/react';

// Component
import { ProductCard } from '@/components';
import { PRODUCT_MOCK } from '@/mock';

const ProductSection = () => (
  <Flex pt="148px" justifyContent="center">
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
      <Flex gap="29px">
        {PRODUCT_MOCK.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            title={item.name}
            price={item.price}
          />
        ))}
      </Flex>
    </Box>
  </Flex>
);

export default ProductSection;
