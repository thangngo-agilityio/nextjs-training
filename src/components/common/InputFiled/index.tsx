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
        {label && (
          <FormLabel
            fontSize="md"
            marginInlineEnd={0}
            minW="max-content"
            color="text.200"
          >
            {label}
          </FormLabel>
        )}
        <InputGroup>
          {leftIcon && (
            <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>
          )}

          <Input
            py={5}
            type="text"
            onChange={handleChangeValue}
            ref={ref}
            borderColor="border.200"
            _hover={{ borderColor: 'border.300' }}
            _focusVisible={{ borderColor: 'border.100' }}
            {...rest}
            isInvalid={isError}
          />

          {rightIcon && (
            <InputRightElement
              w="25px"
              h="25px"
              top="11px"
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
