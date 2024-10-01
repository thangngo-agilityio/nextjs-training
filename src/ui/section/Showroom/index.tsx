'use client';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

const ShowroomSection = () => (
  <Flex
    px="125px"
    borderRadius="sm"
    bgGradient="linear(to-r, background.900, background.400)"
    justifyContent="center"
  >
    <Flex w="100%" maxW="1512px">
      <Flex flexDir="column" pt="49px" pb="39px" flex={1}>
        <Heading mb="10px" variant="septenary" size="size5xl" maxW="580px">
          Customize your furniture and build your space with minifurs
        </Heading>
        <Text mb="22px" size="text2Xl" maxW="580px">
          Allows you to view our showrooms containing our latest furniture
          collections
        </Text>
        <Button size="size3xl" variant="showroom">
          Coming soon...
        </Button>
      </Flex>

      <Flex flex={1} justifyContent="center">
        <Image
          width={545}
          height={356}
          src="/images/egg-chair.svg"
          alt="egg-chair"
        />
      </Flex>
    </Flex>
  </Flex>
);

export default ShowroomSection;
