// Constants
import { DOTS } from '@/constants';

// Types
import { FormatPaginationParams, PaginationTableType } from '@/types';

export const formatNumberButton = (numberOfPage: number): string[] =>
  Array.from({ length: numberOfPage }).map((_, index: number): string =>
    (index + 1).toString(),
  );

export const formatPageArray = ({
  totalPage = 0,
  currentPage = 0,
}: PaginationTableType): string[] => {
  // If the number of pages is less than or equal to 5, display all page buttons
  if (totalPage <= 5) {
    return formatNumberButton(totalPage);
  }

  // If the current page is near the start (pages 1 to 3),
  // Display the first 3 pages and then DOTS and the last page
  if (currentPage <= 3) {
    return [...formatNumberButton(3), DOTS, totalPage.toString()];
  }

  // If the current page is near the end (within the last 3 pages),
  // display the first page, DOTS, and the last 3 pages
  if (currentPage >= totalPage - 2) {
    return ['1', DOTS, ...formatNumberButton(totalPage).splice(-3)];
  }

  // If the current page is in the middle,
  // Display the first page, DOTS, currentPage, DOTS, and the last page
  return ['1', DOTS, currentPage.toString(), DOTS, totalPage.toString()];
};

export const formatPagination = ({
  totalCount,
  limit,
  currentPage,
}: FormatPaginationParams): string[] => {
  const totalPage = Math.ceil(totalCount / limit);

  return formatPageArray({ totalPage, currentPage });
};
