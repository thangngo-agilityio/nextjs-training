// Libs
import { Skeleton, Grid, GridItem } from '@chakra-ui/react';

type TSkeletonProductList = {
  length: number;
};

const SkeletonProductList = ({ length }: TSkeletonProductList): JSX.Element => (
  <Grid
    templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}
    rowGap={{ base: '20px', md: '48px' }}
    columnGap="20px"
  >
    {Array.from({ length: length }, (_, index) => (
      <GridItem key={index}>
        <Skeleton w="320px" height="300px" />
      </GridItem>
    ))}
  </Grid>
);

export default SkeletonProductList;
