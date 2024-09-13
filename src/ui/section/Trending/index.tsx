import { Fragment, useState } from 'react';
import { Flex, RadioGroup } from '@chakra-ui/react';

// Components
import { CardBenefit, ItemCategory } from '@/components';

// Constants
import { BENEFIT_LIST, MENU_ITEM_FILTER } from '@/constants';

const TrendingSection = () => {
  const [value, setValue] = useState('1');
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
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
        mb="46px"
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

      <Flex flexDirection="row" gap="92px">
        {BENEFIT_LIST.map((item) => {
          const IconComponent = item.icon || Fragment;
          return (
            <CardBenefit
              key={item.id}
              icon={<IconComponent />}
              title={item.title}
              text={item.text}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default TrendingSection;
