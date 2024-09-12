import {
  ChangeEvent,
  ReactNode,
  memo,
  useCallback,
  forwardRef,
  ForwardedRef,
} from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputRightElement,
} from '@chakra-ui/react';
import isEqual from 'react-fast-compare';

type TInputFieldProps = Omit<InputProps, 'onChange'> & {
  errorMessages?: string;
  label?: string;
  value?: string;
  variant?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isError?: boolean;
  isValidate?: boolean;
  onChange?: (value: string) => void;
};

const InputField = forwardRef(
  (
    {
      isError = false,
      errorMessages = 'Default error',
      label,
      value,
      variant,
      leftIcon,
      rightIcon,
      onChange,
      ...rest
    }: TInputFieldProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const handleChangeValue = useCallback(
      (e: ChangeEvent<HTMLInputElement>): void => onChange?.(e.target.value),
      [onChange],
    );

    return (
      <FormControl isInvalid={isError}>
        {/* {label && (
          <FormLabel
            fontSize="md"
            marginInlineEnd={0}
            minW="max-content"
            color="text.200"
          >
            {label}
          </FormLabel>
        )} */}
        <InputGroup position="relative">
          {leftIcon && (
            <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>
          )}
          <FormLabel
            pt="24px"
            pl="20px"
            fontSize="md"
            marginInlineEnd={0}
            minW="max-content"
            color="text.900"
            fontWeight={value ? '400' : 'bold'}
            position="absolute"
            transition="0.2s ease"
            transform="auto"
            _focus={{
              translateX: '-1px',
              translateY: '-15px',
              scale: '0.9',
              fontWeight: '400',
            }}
            translateX={value ? '-1px' : 0}
            translateY={value ? '-15px' : 0}
            scale={value ? '0.9' : 'unset'}
            zIndex={1000}
          >
            {label}
          </FormLabel>
          <Input
            type="text"
            onChange={handleChangeValue}
            ref={ref}
            variant={variant}
            {...rest}
            isInvalid={isError}
          />

          {rightIcon && (
            <InputRightElement
              w="25px"
              h="25px"
              top="8px"
              right="15px"
              aria-label="The eye icon"
              type="button"
              as="button"
              _hover={{
                borderColor: 'transparent',
                outline: 'none',
              }}
              _focus={{
                borderColor: 'transparent',
                outline: 'none',
              }}
              data-testid="right-icon-input"
            >
              {rightIcon}
            </InputRightElement>
          )}
        </InputGroup>
        {isError && (
          <FormErrorMessage fontSize="2xs">{errorMessages}</FormErrorMessage>
        )}
      </FormControl>
    );
  },
);

export default memo(InputField, isEqual);
