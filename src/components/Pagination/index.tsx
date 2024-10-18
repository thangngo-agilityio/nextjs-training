import { Button, Flex } from '@chakra-ui/react';

// Components
import { ArrowPaginationIcon } from '@/icons';

// Constants
import { DOTS, NEXT, PREV } from '@/constants';

interface PaginationProps {
  currentPage?: number;
  isDisabledPrev?: boolean;
  isDisableNext?: boolean;
  arrOfCurrButtons?: string[];
  onPageChange?: (direction: string) => void;
  onClickPage?: (currentPage: number) => void;
}

const PaginationComponent = ({
  currentPage = 1,
  arrOfCurrButtons = [],
  isDisabledPrev = false,
  isDisableNext = false,
  onPageChange = () => {},
  onClickPage = () => {},
}: PaginationProps) => {
  const handleNextPage = () => onPageChange(NEXT);

  const handlePrevPage = () => onPageChange(PREV);

  return (
    <Flex
      data-testid="pagination"
      justifyContent="space-between"
      mt={1}
      flexDir="row"
      flexWrap="wrap"
      gap={{ base: 3, default: 0 }}
    >
      <Flex
        alignItems="center"
        w={{
          base: arrOfCurrButtons.length > 1 ? '100%' : 'auto',
          '0.8sm': arrOfCurrButtons.length > 2 ? '100%' : 'auto',
          default: 'auto',
        }}
        gap="4px"
      >
        <Button
          width={{ base: '6px', default: '30px' }}
          height={{ base: '6px', default: '30px' }}
          data-testid="prev-button"
          aria-label="btn-prev"
          variant="iconSecondary"
          cursor={isDisabledPrev ? 'not-allowed' : ''}
          isDisabled={isDisabledPrev}
          onClick={handlePrevPage}
        >
          <ArrowPaginationIcon
            width="10px"
            height="10px"
            isExpanded={false}
            rotate="90deg"
          />
        </Button>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w={{ base: '100%', default: 'auto' }}
        >
          {arrOfCurrButtons.map((item: string, index: number) => {
            const isDots = item === DOTS;
            const isDisable = currentPage === +item || isDots;
            const hoverStyle = isDots
              ? {}
              : {
                  color: 'text.700',
                  bg: 'background.800',
                };
            const disableStyle = isDots
              ? {}
              : {
                  color: 'text.700',
                  bg: 'background.800',
                };
            const handleClickPage = () => onClickPage(+item);

            return (
              <Button
                key={`${item}-${index}`}
                data-testid={`page-${item}-button`}
                aria-label="btn-pages"
                isDisabled={isDisable}
                mx={0.5}
                p={{ base: '15px', lg: '25px' }}
                fontSize={{ base: 'sm', lg: 'md' }}
                bg={currentPage === +item ? 'background.800' : 'transparent'}
                color={currentPage === +item ? 'text.700' : 'text.200'}
                {...(isDots && { cursor: 'not-allowed' })}
                _hover={hoverStyle}
                _disabled={disableStyle}
                onClick={handleClickPage}
              >
                {item}
              </Button>
            );
          })}
        </Flex>
        <Button
          data-testid="next-button"
          aria-label="btn-next"
          variant="iconSecondary"
          cursor={isDisableNext ? 'not-allowed' : ''}
          isDisabled={isDisableNext}
          onClick={handleNextPage}
          width={{ base: '6px', default: '30px' }}
          height={{ base: '6px', default: '30px' }}
        >
          <ArrowPaginationIcon
            width="10px"
            height="10px"
            isExpanded={false}
            rotate="-90deg"
          />
        </Button>
      </Flex>
    </Flex>
  );
};

const Pagination = PaginationComponent;
export default Pagination;
