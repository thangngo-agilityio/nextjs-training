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
      pb={{ base: '8px', lg: '14px' }}
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
        <Box
          as="div"
          w="100%"
          h={{ base: '94px', lg: '180px' }}
          borderRadius="sm"
          overflow="hidden"
        >
          <Image
            width={276}
            height={180}
            src={image}
            alt={title}
            style={{
              borderRadius: 'sm',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Flex
          w={{ base: '30px', lg: '45px' }}
          h={{ base: '30px', lg: '45px' }}
          position="absolute"
          justifyContent="center"
          alignItems="center"
          borderRadius="full"
          bgColor="background.100"
          top="10px"
          right={{ base: '15px', lg: '30px' }}
        >
          <HeartIcon />
        </Flex>
      </Flex>
      <Flex w="100%" px={{ base: '8px', lg: '16px' }} flexDirection="column">
        <Heading variant="senary" size={{ base: 'sm', lg: 'xl' }} noOfLines={1}>
          {title}
        </Heading>
        <Text variant="productCard" size={{ base: 'textMd', lg: 'textLg' }}>
          N{formatAmountNumber(price.toString())}
        </Text>
      </Flex>
    </Flex>
  </Link>
);

export default ProductCard;
