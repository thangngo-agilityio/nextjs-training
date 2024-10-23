import { Flex, Skeleton, SkeletonText, Stack } from '@chakra-ui/react';

type TCartList = {
  length: number;
};

const CartList = ({ length }: TCartList) => (
  <Flex gap="20px" flexDir="column">
    {Array.from({ length: length }, (_, index) => (
      <Flex flexDir="row" gap="15px" key={index}>
        <Flex borderRadius="sm" flex={1} flexDir="column" gap="10px">
          <Skeleton w="100%" h="300px" />
        </Flex>
        <Stack flexDir="column" flex={3} gap="30px">
          <Skeleton h="80px" />
          <SkeletonText h="30px" />
          <SkeletonText h="30px" />
        </Stack>
      </Flex>
    ))}
  </Flex>
);

export default CartList;
