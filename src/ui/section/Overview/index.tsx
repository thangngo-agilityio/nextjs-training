import { Box, Button, Heading, Text } from '@chakra-ui/react';

const OverviewSection = () => (
  <Box
    px="122px"
    pt="162px"
    pb="150"
    bgImage="/images/background-overview.png"
    bgRepeat="no-repeat"
    bgSize="cover"
  >
    <Heading maxW="705px" size="size6xl" variant="secondary">
      We allow customers build & Customize items
    </Heading>
    <Text maxW="665px" mb="20px" size="textXl" variant="secondary">
      Find a bright ideal to suit your taste with our great selection of
      suspension, wall, floor and table lights.
    </Text>
    <Button size="size6xl">Shop Now</Button>
  </Box>
);

export default OverviewSection;
