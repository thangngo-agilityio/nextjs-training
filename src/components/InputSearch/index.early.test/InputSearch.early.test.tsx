// Unit tests for: InputSearch

import React from 'react';
import { SEARCH_QUERIES } from '@/constants';
import { getSearchParams, updateSearchParams } from '@/utils';
import { fireEvent, render, screen } from '@testing-library/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import InputSearch from '../index';
import '@testing-library/jest-dom';

// Mocking necessary hooks and utilities
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

jest.mock('@/utils', () => ({
  getSearchParams: jest.fn(),
  updateSearchParams: jest.fn(),
}));

jest.mock('@/icons', () => ({
  SearchIcon: () => <svg data-testid="search-icon" />,
}));

describe('InputSearch() InputSearch method', () => {
  let replaceMock: jest.Mock;
  let searchParamsMock: URLSearchParams;
  let pathnameMock: string;

  beforeEach(() => {
    replaceMock = jest.fn();
    searchParamsMock = new URLSearchParams();
    pathnameMock = '/test-path';

    (useRouter as jest.Mock).mockReturnValue({ replace: replaceMock });
    (usePathname as jest.Mock).mockReturnValue(pathnameMock);
    (useSearchParams as jest.Mock).mockReturnValue(searchParamsMock);
    (getSearchParams as jest.Mock).mockReturnValue({ name: '' });
    (updateSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
  });

  describe('Happy Path', () => {
    it('should render the input with default placeholder and no initial value', () => {
      // Test to ensure the input renders correctly with default settings
      render(<InputSearch />);
      const inputElement = screen.getByPlaceholderText(
        'Search for minimalist chair',
      );
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveValue('');
    });

    it('should update the search params and call replace on input change', () => {
      // Test to ensure input change updates search params and calls replace
      const updatedParams = new URLSearchParams('name=test');
      (updateSearchParams as jest.Mock).mockReturnValue(updatedParams);

      render(<InputSearch />);
      const inputElement = screen.getByPlaceholderText(
        'Search for minimalist chair',
      );
      fireEvent.change(inputElement, { target: { value: 'test' } });

      setTimeout(() => {
        expect(updateSearchParams).toHaveBeenCalledWith(
          searchParamsMock,
          SEARCH_QUERIES.NAME,
          'test',
        );
        expect(replaceMock).toHaveBeenCalledWith(
          `${pathnameMock}?${updatedParams.toString()}`,
          { scroll: false },
        );
      }, 500);
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty input gracefully', () => {
      // Test to ensure empty input does not cause errors
      render(<InputSearch />);
      const inputElement = screen.getByPlaceholderText(
        'Search for minimalist chair',
      );
      fireEvent.change(inputElement, { target: { value: '' } });

      setTimeout(() => {
        expect(updateSearchParams).toHaveBeenCalledWith(
          searchParamsMock,
          SEARCH_QUERIES.NAME,
          '',
        );
        expect(replaceMock).toHaveBeenCalledWith(`${pathnameMock}?`, {
          scroll: false,
        });
      }, 500);
    });

    it('should debounce input changes', () => {
      // Test to ensure input changes are debounced
      jest.useFakeTimers();
      render(<InputSearch />);
      const inputElement = screen.getByPlaceholderText(
        'Search for minimalist chair',
      );
      fireEvent.change(inputElement, { target: { value: 'a' } });
      fireEvent.change(inputElement, { target: { value: 'ab' } });
      fireEvent.change(inputElement, { target: { value: 'abc' } });

      jest.advanceTimersByTime(500);

      expect(updateSearchParams).toHaveBeenCalledTimes(1);
      expect(replaceMock).toHaveBeenCalledTimes(1);

      jest.useRealTimers();
    });
  });
});

// End of unit tests for: InputSearch
