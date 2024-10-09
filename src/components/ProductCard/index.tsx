import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

// Icons
import { HeartIcon } from '@/icons';
import { formatAmountNumber } from '@/utils';
import Link from 'next/link';
import { ROUTER } from '@/constants';

type ProductCard = {
  id: string;
  image: string;
  title: string;
  price: number;
};

const ProductCard = ({ id, image, title, price }: ProductCard) => (
  <Link href={ROUTER.PRODUCT_DETAIL_PAGE(id)} scroll>
    <Flex
      flexDirection="column"
      borderRadius="sm"
      boxShadow="0 4px 50px -5px rgba(32, 32, 32, 10%)"
      pb="14px"
      alignItems="center"
    >
      <Flex
        w="90%"
        position="relative"
        justifyContent="center"
        mt="-90px"
        mb="18px"
        transition=".2s ease-in"
        _hover={{
          w: '100%',
        }}
      >
        <Box as="div" w="100%" h="180px" borderRadius="sm" overflow="hidden">
          <Image
            width={276}
            height={180}
            src={image}
            alt={title}
            style={{
              borderRadius: 'sm',
              backgroundRepeat: 'no-repeat',
              width: 'auto',
              height: 'auto',
              objectFit: 'cover',
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
      <Flex w="100%" maxW="274px" flexDirection="column">
        <Heading variant="senary" size="xl" noOfLines={1}>
          {title}
        </Heading>
        <Text variant="productCard" size="textLg">
          N{formatAmountNumber(price.toString())}
        </Text>
      </Flex>
    </Flex>
  </Link>
);

export default ProductCard;
