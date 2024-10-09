import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

const SkeletonProductDetail = () => (
  <Flex gap="42px">
    <Flex borderRadius="sm" flex={1} flexDir="column" gap="10px">
      <Skeleton w="100%" h="400px" />
      <Skeleton w="100%" h="400px" />
    </Flex>
    <Stack flexDir="column" flex={1}>
      <SkeletonText />
      <SkeletonText />
      <VStack mb="30px" alignItems="flex-start">
        <Heading variant="productTitle" size="size2xl">
          Dimension:
        </Heading>
        <Flex flexDir="row" gap="5px">
          <Text variant="senary" size="text2Xl">
            Length-34cm,
          </Text>
          <Text variant="tertiary" size="text2Xl">
            Width-56cm
          </Text>
        </Flex>
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
          <Heading variant="quaternary" size="lg" mb="20px">
            Quantity available
          </Heading>
          <HStack gap="20px">
            <Skeleton w="150px" h="50px" />
          </HStack>
        </VStack>
        <VStack alignItems="flex-start">
          <Heading mb="20px" variant="quaternary" size="lg">
            Color:
          </Heading>
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

      <Heading variant="quinary" size="size9xl" mb="58px">
        Delivery Fee: N3,000-N5000
      </Heading>

      <HStack gap="30px">
        <Skeleton w="162px" height="65px" />
        <Skeleton w="162px" height="65px" />
      </HStack>
    </Stack>
  </Flex>
);

export default SkeletonProductDetail;
