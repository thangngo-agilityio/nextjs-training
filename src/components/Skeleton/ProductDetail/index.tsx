import {
  Box,
  Flex,
  Grid,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  VStack,
} from '@chakra-ui/react';

const SkeletonProductDetail = () => (
  <Flex
    gap="42px"
    px={{ base: '28px', lg: '67px' }}
    pt="30px"
    pb={{ base: '100px', lg: '610px' }}
  >
    <Flex borderRadius="sm" flex={1} flexDir="column" gap="10px">
      <Skeleton w="100%" h="400px" />
      <Skeleton w="100%" h="400px" />
    </Flex>
    <Stack flexDir="column" flex={1}>
      <Flex gap="20px" flexDir="column" mb="30px">
        <Skeleton w="100%" h="80px" />
        <SkeletonText />
      </Flex>
      <VStack mb="30px" alignItems="flex-start">
        <Skeleton w="150px" h="40px" />
        <SkeletonText />
      </VStack>

      <Box
        borderTopWidth="1px"
        borderBottomWidth="1px"
        borderColor="border.300"
        mb="28px"
      >
        <SkeletonText />
      </Box>

      <Stack flexDir="row" mb="44px" gap="60px">
        <VStack alignItems="flex-start">
          <Skeleton w="150px" h="40px" />
          <Skeleton w="150px" h="40px" />
        </VStack>
        <VStack alignItems="flex-start">
          <Skeleton w="150px" h="40px" />
          <HStack gap="15px">
            <SkeletonCircle w="36px" h="36px" />
            <SkeletonCircle w="36px" h="36px" />
            <SkeletonCircle w="36px" h="36px" />
          </HStack>
        </VStack>
      </Stack>

      <Grid
        flexDirection="row"
        gap="92px"
        mb="40px"
        templateColumns={{ base: '', lg: 'repeat(2, 1fr)' }}
      >
        <Skeleton w="200px" h="50px" />
        <Skeleton w="200px" h="50px" />
        <Skeleton w="200px" h="50px" />
        <Skeleton w="200px" h="50px" />
      </Grid>

      <Skeleton w="250px" h="40px" mb="58px" />

      <HStack gap="30px">
        <Skeleton w="162px" height="65px" />
        <Skeleton w="162px" height="65px" />
      </HStack>
    </Stack>
  </Flex>
);

export default SkeletonProductDetail;
