'use client';

import { Flex, Grid, GridItem, RadioGroup } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Components
import {
  ItemCategory,
  Pagination,
  ProductCard,
  SkeletonProductList,
} from '@/components';

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
import {
  ChangeEvent,
  Fragment,
  Suspense,
  useCallback,
  useMemo,
  useState,
} from 'react';

const Header = dynamic(() => import('@/layouts/Header'));

const OverviewSection = dynamic(() => import('@/ui/section/Overview'));

type TTrendingSection = {
  productList: TProduct[];
};

const ProductPage = ({ productList }: TTrendingSection) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [filter, setFilter] = useState<string>('');

  const { name } = getSearchParams(searchParams);

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
      <Flex pb="350px" flexDir="column" alignItems="center" mb="20px">
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
          mt="-20px"
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

        <Suspense fallback={<SkeletonProductList length={12} />}>
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
        </Suspense>
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
