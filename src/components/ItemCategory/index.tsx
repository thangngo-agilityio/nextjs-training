import { Flex, Heading, Radio } from '@chakra-ui/react';
import { ReactElement } from 'react';

type TItemCategory = {
  id: string;
  value?: string;
  title?: string;
  icon?: ReactElement;
  iconActive?: ReactElement;
  onChange: () => void;
};

const ItemCategory = ({
  id,
  value,
  title,
  icon,
  iconActive,
}: TItemCategory) => {
  const isActive = value === id;

  return (
    <Radio m={0} value={id}>
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

export default ItemCategory;
