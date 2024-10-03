'use client';

import { Flex, Grid, GridItem } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Components
import { Pagination, ProductCard } from '@/components';

// Hooks
import { usePagination } from '@/hooks';

// Types
import { TProduct } from '@/types';

// Constants
import { PAGE_SIZE_PRODUCT, SEARCH_QUERIES } from '@/constants';

// Utils
import { getSearchParams, updateSearchParams } from '@/utils';
import { ChangeEvent, useCallback } from 'react';

const Header = dynamic(() => import('@/layouts/Header'));

const OverviewSection = dynamic(() => import('@/ui/section/Overview'));

type TTrendingSection = {
  productList: TProduct[];
};

const ProductPage = ({ productList }: TTrendingSection) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { name } = getSearchParams(searchParams);

  const {
    data,
    filterData,
    arrOfCurrButtons,
    isDisabledPrev,
    isDisableNext,
    handlePageChange,
    handlePageClick,
  } = usePagination(productList, PAGE_SIZE_PRODUCT);

  const handleSearchProducts = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const updatedParams = updateSearchParams(
        searchParams,
        SEARCH_QUERIES.NAME,
        value,
      );

      replace(`${pathname}?${updatedParams.toString()}`, { scroll: false });
    },
    [pathname, replace, searchParams],
  );

  return (
    <>
      <Header onChange={handleSearchProducts} searchValue={name} />
      <OverviewSection title="Product page" />
      <Flex
        pt="180px"
        pb="350px"
        flexDir="column"
        alignItems="center"
        mb="20px"
      >
        <Grid
          px="94px"
          gap="29px"
          rowGap="120px"
          templateColumns={{ base: '', lg: 'repeat(4, 1fr)' }}
          mb="20px"
        >
          {filterData.map((item) => (
            <GridItem key={item.id}>
              <ProductCard
                image={item.image}
                title={item.name}
                price={item.price}
              />
            </GridItem>
          ))}
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
