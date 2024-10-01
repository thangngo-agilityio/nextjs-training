import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { memo, ReactElement } from 'react';
import isEqual from 'react-fast-compare';

type TCardBenefit = {
  icon?: ReactElement;
  title?: string;
  text?: string;
};

const CardBenefit = ({ icon, title, text }: TCardBenefit) => (
  <Flex alignItems="center" flexDirection="row">
    <Box>{icon}</Box>
    <Flex maxW="206px" ml="24px" flexDirection="column">
      <Heading size="xl" mb="2px">
        {title}
      </Heading>
      <Text variant="senary" size="textLg">
        {text}
      </Text>
    </Flex>
  </Flex>
);

export default memo(CardBenefit, isEqual);
