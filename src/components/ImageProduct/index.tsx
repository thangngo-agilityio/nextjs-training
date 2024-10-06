import { Flex } from '@chakra-ui/react';
import Image from 'next/image';

type TImageProduct = {
  image: string[];
  alt: string;
};

const ImageProduct = ({ image, alt }: TImageProduct) => (
  <Flex as="div" borderRadius="sm" flex={1} flexDir="column" gap="10px">
    {image.map((link, index) => (
      <Image
        key={index}
        width={647}
        height={549}
        src={link}
        alt={alt}
        style={{ backgroundSize: '100%', borderRadius: '8px', width: '100%' }}
      />
    ))}
  </Flex>
);

export default ImageProduct;
