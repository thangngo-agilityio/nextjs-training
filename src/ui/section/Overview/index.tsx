'use client';

import {
  Button,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

type TOverviewSection = {
  title?: string;
  isHomePage?: boolean;
};

const OverviewSection = ({ isHomePage, title }: TOverviewSection) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex
      px={isMobile ? '28px' : '122px'}
      pt={isHomePage ? '162px' : isMobile ? '172px' : '35px'}
      pb={isHomePage ? (isMobile ? '78px' : '150') : isMobile ? '78px' : '35px'}
      bgImage="/images/background-overview.png"
      bgRepeat="no-repeat"
      bgSize="cover"
      justifyContent="center"
    >
      <Flex
        flexDir="column"
        alignItems={!isHomePage ? 'center' : 'unset'}
        w="100%"
        maxW="1512px"
      >
        <Heading
          maxW="705px"
          size={isHomePage ? (isMobile ? 'xl' : 'size7xl') : 'size6xl'}
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
              size={isMobile ? 'textXs' : 'textXl'}
              variant="secondary"
            >
              Find a bright ideal to suit your taste with our great selection of
              suspension, wall, floor and table lights.
            </Text>
            <Button size={isMobile ? 'xs' : 'size4xl'}>Shop Now</Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default OverviewSection;
