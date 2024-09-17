import { Fragment, useState } from 'react';
import { Box, Flex, Heading, RadioGroup, Text } from '@chakra-ui/react';

// Components
import { CardBenefit, ItemCategory, ProductCard } from '@/components';

// Constants
import { BENEFIT_LIST, MENU_ITEM_FILTER } from '@/constants';
import { PRODUCT_MOCK } from '@/mock';

const TrendingSection = () => {
  const [value, setValue] = useState('1');
  return (
    <Flex justifyContent="center" alignItems="center" pb="90px" px="94px">
      <Flex
        flexDir="column"
        maxW="1512px"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          width="73%"
          px="145px"
          pt="20px"
          pb="26px"
          bgColor="background.800"
          boxShadow="0 11px 30px 4px rgba(0, 0, 0, 7%)"
          gap="75px"
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

        <Flex flexDirection="row" gap="92px" mb="98px" px="104px">
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

        <Flex mb="166px">
          <Flex flexDirection="column" alignItems="center" textAlign="center">
            <Heading mb="10px" size="size7xl" variant="quinary">
              Top Trending
            </Heading>
            <Text maxW="797px" variant="septenary" size="text2Xl" mb="10px">
              Find a bright ideal to suit your taste with our great selection of
              suspension, wall, floor and table lights.
            </Text>
            <Box w="98px" h="5px" bgColor="background.300" />
          </Flex>
        </Flex>

        <Flex px="94px" gap="29px">
          {PRODUCT_MOCK.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              title={item.name}
              price={item.price}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TrendingSection;
