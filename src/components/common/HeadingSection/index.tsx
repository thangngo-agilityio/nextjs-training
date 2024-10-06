import { Flex, Heading } from '@chakra-ui/react';

type THeadingSection = {
  title: string;
};

const HeadingSection = ({ title }: THeadingSection) => (
  <Flex
    w="100%"
    flexDir="column"
    borderBottom="1px solid #DEE5EF"
    mt="65px"
    mb="35px"
  >
    <Heading size="size5xl" variant="quinary" mb="8px">
      {title}
    </Heading>
  </Flex>
);

export default HeadingSection;
