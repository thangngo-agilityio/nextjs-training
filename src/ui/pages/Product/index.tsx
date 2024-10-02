'use client';

import { Flex, Grid, GridItem } from '@chakra-ui/react';

// Components
import { Pagination, ProductCard } from '@/components';

// Hooks
import { usePagination } from '@/hooks';

// Types
import { TProduct } from '@/types';
import { PAGE_SIZE_PRODUCT } from '@/constants';

type TTrendingSection = {
  productList: TProduct[];
};

const ProductPage = ({ productList }: TTrendingSection) => {
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
    <Flex flexDir="column" alignItems="center" mb="20px">
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
  );
};

export default ProductPage;
