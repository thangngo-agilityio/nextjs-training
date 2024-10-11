import Link from 'next/link';
import { Suspense } from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

// Component
import { ProductCard, SkeletonProductList } from '@/components';
import { VectorIcon } from '@/icons';

// Types
import { TProduct } from '@/types';

// Constants
import { ROUTER } from '@/constants';

type TProductSection = {
  productList: TProduct[];
};

const ProductSection = ({ productList }: TProductSection) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <Flex
      pt={{ base: '54px', lg: '148px' }}
      pb={{ base: '50px', lg: '416px' }}
      justifyContent="center"
    >
      <Box maxW="1512px">
        <Flex
          px={{ base: '28px', lg: '104px' }}
          mb={{ base: '120px', lg: '165px' }}
        >
          <Flex w="100%">
            <Heading
              maxW="340px"
              variant="product"
              size={{ base: 'size2xl', lg: 'size8xl' }}
            >
              {isMobile ? 'Latest Release' : 'We Have Some Awesome Products.'}
            </Heading>
            {!isMobile && (
              <Text
                ml="118px"
                maxW="518px"
                size="textLg"
                variant="productPrimary"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s,
              </Text>
            )}
          </Flex>
          {isMobile && (
            <Flex w="100%" justifyContent="flex-end">
              <HStack as={Link} href={ROUTER.PRODUCT}>
                <Text
                  size={{ base: 'textSm', lg: 'textMd' }}
                  variant="tertiary"
                >
                  See all
                </Text>
                <VectorIcon />
              </HStack>
            </Flex>
          )}
        </Flex>
        <Suspense fallback={<SkeletonProductList length={4} />}>
          <Grid
            px={{ base: '28px', lg: '94px' }}
            gap="29px"
            rowGap="120px"
            templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
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
};

export default ProductSection;
