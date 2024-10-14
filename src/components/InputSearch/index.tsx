'use client';

import { SEARCH_QUERIES } from '@/constants';
import { SearchIcon } from '@/icons';
import { getSearchParams, updateSearchParams } from '@/utils';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebounceCallback } from 'usehooks-ts';

const InputSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { name } = getSearchParams(searchParams);

  const handleOnChange = useDebounceCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const updatedParams = updateSearchParams(
        searchParams,
        SEARCH_QUERIES.NAME,
        value,
      );

      replace(`${pathname}?${updatedParams.toString()}`, { scroll: false });
    },
    500,
  );
  return (
    <InputGroup>
      <InputLeftElement>
        <SearchIcon />
      </InputLeftElement>
      <Input
        placeholder="Search for minimalist chair"
        defaultValue={name}
        onChange={handleOnChange}
        variant="search"
        background="background.100"
        data-testid="search"
      />
    </InputGroup>
  );
};

export default InputSearch;
