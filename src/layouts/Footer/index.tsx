'use client';

import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { NavFooter } from '@/components';
import { LineDownIcon, LogoWhiteIcon } from '@/icons';
import { FOOTER_COMPANY_LIST, FOOTER_SERVICE_LIST } from '@/constants';

const Footer = () => (
  <Flex
    as="footer"
    flexDir="column"
    bgImage="/images/background-footer-secondary.svg"
    bgSize="cover"
    bgRepeat="no-repeat"
  >
    <Flex
      w="92%"
      justifyContent="center"
      bgColor="background.1100"
      boxShadow="50px 130px 100px rgba(0, 0, 0, 14.59%)"
      mt="-276px"
      mb="64px"
    >
      <Flex flexDir="column" w="100%" maxW="1512px" px="252px" py="74px">
        <Heading maxW="864px" size="size7xl" variant="footerPrimary" mb="48px">
          Let’s make your space amazing together.
        </Heading>
        <Button textTransform="uppercase" variant="footer" size="lg">
          let&apos;s get started
        </Button>
      </Flex>
    </Flex>
    <Flex justifyContent="center">
      <Flex w="100%" maxW="1512px" flexDir="column" px="172px">
        <Flex flexDir="row" mb="62px">
          <Box position="relative" flex={2}>
            <Flex gap="120px">
              <Flex flexDir="column">
                <Heading mb="22px" variant="footerSecondary" size="lg">
                  Service
                </Heading>
                <Flex flexDir="column" gap="10px" fontFamily="poppins">
                  {FOOTER_SERVICE_LIST.map((item) => (
                    <NavFooter
                      key={item.id}
                      path={item.path}
                      name={item.name}
                    />
                  ))}
                </Flex>
              </Flex>
              <Flex flexDir="column">
                <Heading mb="22px" variant="footerSecondary" size="lg">
                  Company
                </Heading>
                <Flex flexDir="column" gap="10px" fontFamily="poppins">
                  {FOOTER_COMPANY_LIST.map((item) => (
                    <NavFooter
                      key={item.id}
                      path={item.path}
                      name={item.name}
                    />
                  ))}
                </Flex>
              </Flex>
            </Flex>
            <Box position="absolute" top={0} right={0}>
              <LineDownIcon />
            </Box>
          </Box>
          <Box flex={1} pl="166px">
            <Flex flexDir="column">
              <Heading mb="22px" variant="footerSecondary" size="lg">
                Get in Touch
              </Heading>
              <Text maxW="282px" variant="footer" size="textLg" mb="24px">
                Feel free to get in touch with us vai email
              </Text>
              <Text variant="footerPrimary" size="text9xl" mb="28px">
                minifurs@gmail.com
              </Text>
              <Flex alignItems="center" gap="12px">
                <Box
                  w="35px"
                  h="35px"
                  borderRadius="full"
                  bgColor="background.1200"
                />
                <Box
                  w="35px"
                  h="35px"
                  borderRadius="full"
                  bgColor="background.1200"
                />
                <Box
                  w="35px"
                  h="35px"
                  borderRadius="full"
                  bgColor="background.300"
                />
                <Box
                  w="35px"
                  h="35px"
                  borderRadius="full"
                  bgColor="background.1200"
                />
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Flex
          w="100%"
          flexDir="row"
          borderTopWidth="1px"
          borderColor="border.100"
          justifyContent="space-between"
          alignItems="center"
          pr="30px"
          pt="8px"
          pb="14px"
        >
          <Box>
            <LogoWhiteIcon />
          </Box>
          <Text variant="copyright" size="textMd">
            &copy; 2020@webovio. All Rights Reserved.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

export default Footer;
