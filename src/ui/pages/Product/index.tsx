'use client';

import { Flex, Grid, GridItem, RadioGroup } from '@chakra-ui/react';
import { Fragment, Suspense, useMemo, useState } from 'react';

// Components
import { ItemCategory, Pagination, SkeletonProductList } from '@/components';
import lazy from 'next/dynamic';
import { OverviewSection } from '@/ui/section';

// Hooks
import { usePagination } from '@/hooks';

// Types
import { TProduct } from '@/types';

// Constants
import { MENU_ITEM_FILTER, PAGE_SIZE_PRODUCT } from '@/constants';

const ProductCard = lazy(() => import('@/components/ProductCard'));

type TTrendingSection = {
  productList: TProduct[];
};

const ProductPage = ({ productList }: TTrendingSection) => {
  const [filter, setFilter] = useState<string>('');

  const productFilter = useMemo(
    () =>
      productList.filter(({ category }) => category.trim().includes(filter)),
    [filter, productList],
  );

  const {
    data,
    filterData,
    arrOfCurrButtons,
    isDisabledPrev,
    isDisableNext,
    handlePageChange,
    handlePageClick,
  } = usePagination(productFilter, PAGE_SIZE_PRODUCT);

  return (
    <>
      <OverviewSection title="Product page" />
      <Flex
        pb={{ base: '100px', lg: '350px' }}
        flexDir="column"
        alignItems="center"
        mb="20px"
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
          mt={{ base: 'unset', lg: '-20px' }}
          mb="146px"
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

        <Grid
          px={{ base: '28px', lg: '94px' }}
          gap={{ base: '120px 15px', lg: '120px 29px' }}
          templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
          mb="20px"
        >
          <Suspense fallback={<SkeletonProductList length={12} />}>
            {filterData.map((item) => (
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
        <Pagination
          currentPage={data.currentPage}
          isDisableNext={isDisableNext}
          isDisabledPrev={isDisabledPrev}
          arrOfCurrButtons={arrOfCurrButtons}
          onPageChange={handlePageChange}
          onClickPage={handlePageClick}
        />
      </Flex>
    </>
  );
};

export default ProductPage;
