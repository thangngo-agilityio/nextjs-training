'use client';

import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

// Components
import { ProductCard, Pagination } from '@/components';

// Hooks
import { usePagination } from '@/hooks';

// Types
import { TProduct } from '@/types';

// Constants
import { PAGE_SIZE_PRODUCT } from '@/constants';

type TProductListProps = {
  productList: TProduct[];
};

const ProductList = ({ productList }: TProductListProps) => {
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
      {productList.length > 0 ? (
        <Grid
          px={{ base: '28px', lg: '94px' }}
          gap={{ base: '120px 15px', lg: '120px 29px' }}
          templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
          mb="20px"
        >
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
        </Grid>
      ) : (
        <Box px={{ base: '28px', lg: '320px' }} mb="50px">
          <Text size="textLg" textAlign="center">
            No products in list
          </Text>
        </Box>
      )}
      <Pagination
        currentPage={data.currentPage}
        isDisableNext={isDisableNext}
        isDisabledPrev={isDisabledPrev}
        arrOfCurrButtons={arrOfCurrButtons}
        onPageChange={handlePageChange}
        onClickPage={handlePageClick}
      />
    </>
  );
};

export default ProductList;
