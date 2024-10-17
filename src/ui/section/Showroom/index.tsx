'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';

const ShowroomSection = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <Flex
      px={{ base: '24px', lg: '125px' }}
      borderRadius="sm"
      bgGradient="linear(to-r, background.900, background.400)"
      justifyContent="center"
      mx={{ base: '20px', lg: 'unset' }}
    >
      <Flex w="100%" maxW="1512px">
        <Flex
          flexDir="column"
          pt={{ base: '30px', lg: '49px' }}
          pb={{ base: '15px', lg: '39px' }}
          flex={{ base: 2, lg: 1 }}
        >
          <Heading
            mb="10px"
            variant="septenary"
            size={{ base: 'md', lg: 'size5xl' }}
            maxW="580px"
          >
            {isMobile
              ? 'Virtual Reality Showroom'
              : 'Customize your furniture and build your space with minifurs'}
          </Heading>
          <Text
            w={{ base: '180px', lg: 'unset' }}
            mb={{ base: '5px', lg: '22px' }}
            size={{ base: 'unset', lg: 'text2Xl' }}
            fontSize={{ base: '6px', lg: 'unset' }}
            maxW="580px"
          >
            Allows you to view our showrooms containing our latest furniture
            collections
          </Text>
          <Button
            size={{ base: 'showroomMobile', lg: 'size3xl' }}
            variant={{ base: 'showroomMobile', lg: 'showroom' }}
          >
            Coming soon...
          </Button>
        </Flex>

        <Flex
          as="div"
          flex={1}
          justifyContent="center"
          position={{ base: 'relative', lg: 'unset' }}
        >
          <Box
            position={{ base: 'absolute', lg: 'unset' }}
            w={{ base: '264px', lg: 'unset' }}
            h={{ base: '127px', lg: 'unset' }}
          >
            <Image
              width={545}
              height={356}
              src="/images/egg-chair.svg"
              alt="egg-chair"
              style={{ width: '100%' }}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ShowroomSection;
