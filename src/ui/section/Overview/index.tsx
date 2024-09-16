import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

const OverviewSection = () => (
  <Flex
    px="122px"
    pt="162px"
    pb="150"
    bgImage="/images/background-overview.png"
    bgRepeat="no-repeat"
    bgSize="cover"
    justifyContent="center"
  >
    <Box w="100%" maxW="1512px">
      <Heading maxW="705px" size="size7xl" variant="secondary">
        We allow customers build & Customize items
      </Heading>
      <Text maxW="665px" mb="20px" size="textXl" variant="secondary">
        Find a bright ideal to suit your taste with our great selection of
        suspension, wall, floor and table lights.
      </Text>
      <Button size="size4xl">Shop Now</Button>
    </Box>
  </Flex>
);

export default OverviewSection;
