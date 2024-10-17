import { Flex, Heading, Radio } from '@chakra-ui/react';
import { memo, ReactElement } from 'react';
import isEqual from 'react-fast-compare';

type TItemCategory = {
  title: string;
  value?: string;
  filter?: string;
  icon?: ReactElement;
  iconActive?: ReactElement;
};

const ItemCategory = ({
  title,
  filter,
  value,
  icon,
  iconActive,
}: TItemCategory) => {
  const isActive = value === filter;

  return (
    <Radio m={0} value={value}>
      <Flex
        w="56px"
        h="56px"
        borderRadius="xl"
        bgColor={isActive ? 'background.300' : 'background.700'}
        transition=".2s ease-in"
        opacity="1"
        _hover={{
          bgColor: 'background.300',
        }}
        justifyContent="center"
        alignItems="center"
        mb="8px"
      >
        {!isActive ? icon : iconActive}
      </Flex>
      <Heading size="xs" variant="quaternary">
        {title}
      </Heading>
    </Radio>
  );
};

export default memo(ItemCategory, isEqual);
