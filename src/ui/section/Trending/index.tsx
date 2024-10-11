import { Fragment, Suspense } from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  RadioGroup,
  Text,
  useBreakpointValue,
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
import { VectorIcon } from '@/icons';

type TTrendingSection = {
  productList: TProduct[];
};

const TrendingSection = ({ productList }: TTrendingSection) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      px={{ base: 'unset', lg: '94px' }}
    >
      <Flex
        w={{ base: '100%', lg: 'unset' }}
        flexDir="column"
        maxW={{ base: 'unset', lg: '1512px' }}
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          width={{ base: '100%', lg: '73%' }}
          px={{ base: '28px', lg: '145px' }}
          pt="20px"
          pb="26px"
          bgColor={{ base: 'transparent', lg: 'background.800' }}
          boxShadow={{ base: 'unset', lg: '0 11px 30px 4px rgba(0, 0, 0, 7%)' }}
          gap={{ base: '25px', lg: '75px' }}
          justifyContent="center"
          alignItems="center"
          mt={{ base: 'unset', lg: '-60px' }}
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

        {!isMobile && (
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
        )}

        <Flex
          w={{ base: '100%', lg: 'unset' }}
          px={{ base: '28px', lg: 'unset' }}
          mb={{ base: '106px', lg: '136px' }}
          flexDir={{ base: 'row', lg: 'column' }}
          alignItems="center"
        >
          <Flex
            w="100%"
            flexDirection="column"
            alignItems={{ base: 'unset', lg: 'center' }}
            textAlign={{ base: 'unset', lg: 'center' }}
            mb={{ base: 'unset', lg: '30px' }}
          >
            <Heading
              mb="10px"
              size={{ base: 'size2xl', lg: 'size7xl' }}
              variant="quinary"
            >
              Top Trending
            </Heading>
            {!isMobile && (
              <>
                <Text maxW="797px" variant="septenary" size="text2Xl" mb="10px">
                  Find a bright ideal to suit your taste with our great
                  selection of suspension, wall, floor and table lights.
                </Text>
                <Box w="98px" h="5px" bgColor="background.300" />
              </>
            )}
          </Flex>
          <Flex w="100%" justifyContent="flex-end">
            <HStack as={Link} href={ROUTER.PRODUCT}>
              <Text size={{ base: 'textSm', lg: 'textMd' }} variant="tertiary">
                See all
              </Text>
              <VectorIcon />
            </HStack>
          </Flex>
        </Flex>

        <Grid
          px={{ base: '28px', lg: '94px' }}
          gap={{ base: '15px', lg: '29px' }}
          rowGap="120px"
          templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
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
};

export default TrendingSection;
