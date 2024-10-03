import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

type TOverviewSection = {
  title?: string;
  isHomePage?: boolean;
};

const OverviewSection = ({ isHomePage, title }: TOverviewSection) => (
  <Flex
    px="122px"
    pt={isHomePage ? '162px' : '35px'}
    pb={isHomePage ? '150' : '35px'}
    bgImage="/images/background-overview.png"
    bgRepeat="no-repeat"
    bgSize="cover"
    justifyContent="center"
  >
    <Box w="100%" maxW="1512px">
      <Heading
        maxW="705px"
        size={isHomePage ? 'size7xl' : 'size6xl'}
        variant="secondary"
      >
        {isHomePage ? 'We allow customers build & Customize items' : title}
      </Heading>
      {isHomePage && (
        <>
          <Text maxW="665px" mb="20px" size="textXl" variant="secondary">
            Find a bright ideal to suit your taste with our great selection of
            suspension, wall, floor and table lights.
          </Text>
          <Button size="size4xl">Shop Now</Button>
        </>
      )}
    </Box>
  </Flex>
);

export default OverviewSection;
