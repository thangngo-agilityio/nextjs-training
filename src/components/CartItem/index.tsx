import Image from 'next/image';
import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';

// Utils
import { formatAmountNumber } from '@/utils';

// Icons
import { DeleteIcon } from '@/icons';

type TCartItem = {
  title: string;
  image: string[];
  description: string;
  price: number;
  onClick?: () => void;
};

const CartItem = ({ title, image, description, price, onClick }: TCartItem) => (
  <Flex flexDir="row" gap="30px">
    <Flex flex={1}>
      <Image
        width={347}
        height={290}
        src={image[0]}
        alt={title}
        style={{ backgroundSize: '100%', borderRadius: '8px', width: '100%' }}
      />
    </Flex>
    <Flex flex={4} flexDir="column">
      <Heading>{title}</Heading>
      <Text>{description}</Text>

      <VStack mb="30px" alignItems="flex-start">
        <Heading variant="productTitle" size="size2xl">
          Dimension:
        </Heading>
        <Flex flexDir="row" gap="5px">
          <Text variant="senary" size="text2Xl">
            Length-34cm,
          </Text>
          <Text variant="tertiary" size="text2Xl">
            Width-56cm
          </Text>
        </Flex>
      </VStack>

      <Box borderTopWidth="1px" borderColor="border.300" mb="28px">
        <Heading size="size9xl" variant="quinary" py="10px">
          N{formatAmountNumber(price?.toString())}
        </Heading>
      </Box>
    </Flex>

    <Flex>
      <Button onClick={onClick}>
        <DeleteIcon />
      </Button>
    </Flex>
  </Flex>
);

export default CartItem;
