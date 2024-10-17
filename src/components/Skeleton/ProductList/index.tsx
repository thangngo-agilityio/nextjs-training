// Libs
import { Skeleton, Grid, GridItem } from '@chakra-ui/react';

type TSkeletonProductList = {
  length: number;
};

const SkeletonProductList = ({ length }: TSkeletonProductList): JSX.Element => (
  <Grid
    templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
    gap={{ base: '120px 15px', lg: '120px 29px' }}
  >
    {Array.from({ length: length }, (_, index) => (
      <GridItem key={index}>
        <Skeleton w="320px" height="300px" />
      </GridItem>
    ))}
  </Grid>
);

export default SkeletonProductList;
