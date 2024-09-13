import { Fragment, useState } from 'react';
import { Flex, RadioGroup } from '@chakra-ui/react';

// Components
import { ItemCategory } from '@/components';

// Constants
import { MENU_ITEM_FILTER } from '@/constants';

const TrendingSection = () => {
  const [value, setValue] = useState('1');
  return (
    <Flex justifyContent="center" alignItems="center">
      <Flex
        width="60%"
        px="145px"
        pt="20px"
        pb="26px"
        bgColor="background.800"
        boxShadow="0 11px 30px 4px rgba(0, 0, 0, 7%)"
        gap="80px"
        justifyContent="center"
        alignItems="center"
        mt="-60px"
      >
        {MENU_ITEM_FILTER.map((item) => {
          const IconComponent = item.icon || Fragment;
          const IconActiveComponent = item.iconActive || Fragment;
          return (
            <RadioGroup
              flexDirection="column"
              alignItems="center"
              cursor="pointer"
              onChange={setValue}
              value={value}
              key={item.id}
            >
              <ItemCategory
                id={item.id}
                value={value}
                title={item.itemContent}
                icon={<IconComponent />}
                iconActive={<IconActiveComponent />}
                onChange={() => {}}
              />
            </RadioGroup>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default TrendingSection;
