import Image from 'next/image';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { useCallback } from 'react';

// Utils
import { formatAmountNumber } from '@/utils';

// Icons
import { DeleteIcon } from '@/icons';

type TCartItem = {
  id: string;
  title: string;
  image: string[];
  description: string;
  price: number;
  quantity: number;
  onRemoveItem?: (id: string) => void;
};

const CartItem = ({
  id,
  title,
  image,
  description,
  price,
  quantity,
  onRemoveItem,
}: TCartItem) => {
  const handleRemoveItem = useCallback(() => {
    onRemoveItem && onRemoveItem(id);
  }, [id, onRemoveItem]);
  return (
    <Flex flexDir="row" gap="30px">
      <Flex flex={1}>
        <Image
          width={347}
          height={290}
          src={image[0]}
          alt={title}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: '8px',
          }}
        />
      </Flex>
      <Flex flex={4} flexDir="column">
        <Heading size="size6xl" variant="quinary" mb="5px">
          {title}
        </Heading>
        <Text size="text2Xl" variant="senary" mb="30px">
          {description}
        </Text>

        <VStack mb="30px" alignItems="flex-start">
          <Heading variant="productTitle" size="size2xl">
            Size:
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

        <Box w="50%" borderTopWidth="1px" borderColor="border.300" mb="10px">
          <Heading size="size9xl" variant="quinary" py="10px">
            N{formatAmountNumber(price?.toString())}
          </Heading>
        </Box>

        <Flex gap="10px">
          <Heading variant="productTitle" size="size2xl">
            Quantity:
          </Heading>
          <Text variant="tertiary" size="text2Xl">
            {quantity}
          </Text>
        </Flex>
      </Flex>

      <Flex justifyContent="center" alignItems="center">
        <Box height="fit-content" onClick={handleRemoveItem} cursor="pointer">
          <DeleteIcon />
        </Box>
      </Flex>
    </Flex>
  );
};

export default CartItem;
