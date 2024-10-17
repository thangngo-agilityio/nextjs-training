import { Button, Flex, Heading, Text } from '@chakra-ui/react';

type TOverviewSection = {
  title?: string;
  isHomePage?: boolean;
};

const OverviewSection = ({ isHomePage, title }: TOverviewSection) => (
  <Flex
    px={{ base: '28px', lg: '122px' }}
    pt={isHomePage ? '162px' : { base: '172px', lg: '35px' }}
    pb={isHomePage ? { base: '78px', lg: '150' } : { base: '78px', lg: '35px' }}
    bgImage="/images/background-overview.png"
    bgRepeat="no-repeat"
    bgSize="cover"
    justifyContent="center"
  >
    <Flex
      flexDir="column"
      alignItems={{ base: 'center', lg: 'unset' }}
      w="100%"
      maxW="1512px"
    >
      <Heading
        maxW="705px"
        size={isHomePage ? { base: 'xl', lg: 'size7xl' } : 'size6xl'}
        variant="secondary"
        textAlign={!isHomePage ? 'center' : 'unset'}
      >
        {isHomePage ? 'We allow customers build & Customize items' : title}
      </Heading>
      {isHomePage && (
        <>
          <Text
            maxW="665px"
            mb="20px"
            size={{ base: 'textXs', lg: 'textXl' }}
            variant="secondary"
          >
            Find a bright ideal to suit your taste with our great selection of
            suspension, wall, floor and table lights.
          </Text>
          <Button size={{ base: 'xs', lg: 'size4xl' }}>Shop Now</Button>
        </>
      )}
    </Flex>
  </Flex>
);

export default OverviewSection;
