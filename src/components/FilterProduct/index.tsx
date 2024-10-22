'use client';

import { Fragment, useCallback } from 'react';
import { Flex, RadioGroup } from '@chakra-ui/react';

// Components
import ItemCategory from '../ItemCategory';

// Constants
import { MENU_ITEM_FILTER, SEARCH_QUERIES } from '@/constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getSearchParams, updateSearchParams } from '@/utils';

const FilterProduct = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { category = '' } = getSearchParams(searchParams);

  const handleFilterProduct = useCallback(
    (category: string) => {
      const value = category;

      const updatedParams = updateSearchParams(
        searchParams,
        SEARCH_QUERIES.CATEGORIES,
        value,
      );

      replace(`${pathname}?${updatedParams.toString()}`, { scroll: false });
    },
    [pathname, replace, searchParams],
  );
  return (
    <Flex
      width={{ base: '100%', lg: '73%' }}
      px={{ base: '28px', lg: '145px' }}
      pt="20px"
      pb="26px"
      bgColor={{ base: 'transparent', lg: 'background.800' }}
      boxShadow={{ base: 'unset', lg: '0 11px 30px 4px rgba(0, 0, 0, 7%)' }}
      gap={{ base: '25px', lg: '75px' }}
      justifyContent="center"
      alignItems="center"
      mt={{ base: 'unset', lg: '-20px' }}
      mb="146px"
    >
      {MENU_ITEM_FILTER.map((item) => {
        const IconComponent = item.icon || Fragment;
        const IconActiveComponent = item.iconActive || Fragment;
        return (
          <RadioGroup
            flexDirection="column"
            alignItems="center"
            cursor="pointer"
            onChange={handleFilterProduct}
            value={category}
            key={item.id}
          >
            <ItemCategory
              value={item.value}
              title={item.itemContent}
              filter={category}
              icon={<IconComponent />}
              iconActive={<IconActiveComponent />}
            />
          </RadioGroup>
        );
      })}
    </Flex>
  );
};

export default FilterProduct;
