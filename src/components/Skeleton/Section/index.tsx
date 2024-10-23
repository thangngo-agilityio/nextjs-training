import { Box, Flex, Skeleton } from '@chakra-ui/react';

type TSkeletonHome = {
  length: number;
};

const SkeletonHome = ({ length }: TSkeletonHome) => (
  <Flex flexDir="column" gap="30px">
    {Array.from({ length: length }, (_, index) => (
      <Box key={index}>
        <Skeleton w="100%" height="650px" />
      </Box>
    ))}
  </Flex>
);

export default SkeletonHome;
