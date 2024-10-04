import { LogoWhiteIcon } from '@/icons';
import { Flex, Heading } from '@chakra-ui/react';

type THeadingSection = {
  title: string;
};

const HeadingSection = ({ title }: THeadingSection) => (
  <Flex w="100%" flexDir="column">
    <Heading size="size5xl" variant="quinary" mb="8px">
      {title}
    </Heading>
    <LogoWhiteIcon />
  </Flex>
);

export default HeadingSection;
