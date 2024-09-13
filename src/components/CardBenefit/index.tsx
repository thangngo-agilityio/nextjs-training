import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

type TCardBenefit = {
  icon?: ReactElement;
  title?: string;
  text?: string;
};

const CardBenefit = ({ icon, title, text }: TCardBenefit) => (
  <Flex>
    <Box>{icon}</Box>
    <Flex maxW="205px" ml="24px" flexDirection="column">
      <Heading size="xl" mb="2px">
        {title}
      </Heading>
      <Text variant="senary" size="textLg">
        {text}
      </Text>
    </Flex>
  </Flex>
);

export default CardBenefit;
