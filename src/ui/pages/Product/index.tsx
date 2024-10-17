'use client';

import { Flex, Grid, GridItem, RadioGroup } from '@chakra-ui/react';
import { Fragment, Suspense } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebounceCallback } from 'usehooks-ts';
import dynamic from 'next/dynamic';

// Components
import { ItemCategory, Pagination, SkeletonProductList } from '@/components';
import { OverviewSection } from '@/ui/section';

// Hooks
import { usePagination } from '@/hooks';

// Types
import { TProduct } from '@/types';

// Constants
import {
  MENU_ITEM_FILTER,
  PAGE_SIZE_PRODUCT,
  SEARCH_QUERIES,
} from '@/constants';

// Utils
import { getSearchParams, updateSearchParams } from '@/utils';

const ProductCard = dynamic(() => import('@/components/ProductCard'));

type TTrendingSection = {
  productList: TProduct[];
};

const ProductPage = ({ productList }: TTrendingSection) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { category = '' } = getSearchParams(searchParams);

  const handleFilterProduct = useDebounceCallback((category: string) => {
    const value = category;

    const updatedParams = updateSearchParams(
      searchParams,
      SEARCH_QUERIES.CATEGORIES,
      value,
    );

    replace(`${pathname}?${updatedParams.toString()}`, { scroll: false });
  }, 500);

  const {
    data,
    filterData,
    arrOfCurrButtons,
    isDisabledPrev,
    isDisableNext,
    handlePageChange,
    handlePageClick,
  } = usePagination(productList, PAGE_SIZE_PRODUCT);

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
                onChange={handleFilterProduct}
                value={category}
                key={item.id}
              >
                <ItemCategory
                  value={item.value}
                  title={item.itemContent}
                  filter={category}
                  icon={<IconComponent />}
                  iconActive={<IconActiveComponent />}
                />
              </RadioGroup>
            );
          })}
        </Flex>

        <Grid
          px={{ base: '28px', lg: '320px' }}
          gap={{ base: '120px 15px', lg: '120px 29px' }}
          templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
          mb="20px"
        >
          <Suspense fallback={<SkeletonProductList length={8} />}>
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
