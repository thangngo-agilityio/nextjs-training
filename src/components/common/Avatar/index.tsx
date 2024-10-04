import { Box, Image } from '@chakra-ui/react';

type TAvatarProps = {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
};

const Avatar = ({
  src = '/images/avatar-default.svg',
  alt = 'Avatar',
  width = '40px',
  height = '40px',
  ...props
}: TAvatarProps) => (
  <Box as="div" w={width} h={height} borderRadius="lg" {...props}>
    <Image
      w="100%"
      h="100%"
      borderRadius="xl"
      objectFit="cover"
      src={src}
      alt={alt}
    />
  </Box>
);

export default Avatar;
