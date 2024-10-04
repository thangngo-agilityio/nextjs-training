import { Box } from '@chakra-ui/react';
import Image from 'next/image';

type TImageProduct = {
  src: string;
  alt: string;
};

const ImageProduct = ({ src, alt }: TImageProduct) => (
  <Box borderRadius="sm">
    <Image
      width={647}
      height={549}
      src={src}
      alt={alt}
      style={{ backgroundSize: '100%', borderRadius: '8px' }}
    />
  </Box>
);

export default ImageProduct;
