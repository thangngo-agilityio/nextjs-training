import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

// Icons
import { HeartIcon } from '@/icons';
import { formatAmountNumber } from '@/utils';

type ProductCard = {
  image: string;
  title: string;
  price: number;
};

const ProductCard = ({ image, title, price }: ProductCard) => (
  <Flex
    flexDirection="column"
    borderRadius="sm"
    boxShadow="0 4px 50px -5px rgba(32, 32, 32, 10%)"
    pb="14px"
  >
    <Flex
      w="100%"
      position="relative"
      justifyContent="center"
      mt="-90px"
      mb="18px"
    >
      <Box w="90%" h="180px" borderRadius="sm" overflow="hidden">
        <Image
          width={276}
          height={180}
          objectFit="cover"
          src={image}
          alt={title}
          style={{
            borderRadius: 'sm',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            backgroundSize: 'cover',
          }}
        />
      </Box>
      <Flex
        w="45px"
        h="45px"
        position="absolute"
        justifyContent="center"
        alignItems="center"
        borderRadius="full"
        bgColor="background.100"
        top="10px"
        right="30px"
      >
        <HeartIcon />
      </Flex>
    </Flex>
    <Flex maxW="274px" flexDirection="column" alignItems="flex-start" px="16px">
      <Heading variant="senary" size="xl" noOfLines={1}>
        {title}
      </Heading>
      <Text variant="productCard" size="textLg">
        N{formatAmountNumber(price.toString())}
      </Text>
    </Flex>
  </Flex>
);

export default ProductCard;
