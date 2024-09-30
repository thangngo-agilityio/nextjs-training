import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import Link from 'next/link';

// Component
import { InputField } from '../common';
import { GoogleIcon, LineIcon } from '@/icons';

// Constants
import { ISignUpForm, ROUTER } from '@/constants';

// Types
import { TUser } from '@/types';

type TAuthFormProps = {
  isDisabled?: boolean;
  errorMessage?: string;
  onChange?: (value: string) => void;
  handleClearRootError?: () => void;
  handleSubmit?: () => void;
  onSubmit: (data: Omit<TUser, 'id'>) => void;
};

const SignUpForm = ({
  isDisabled = false,
  errorMessage = '',
  handleClearRootError,
  onSubmit,
}: TAuthFormProps) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    clearErrors,
  } = useForm<ISignUpForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: '',
    },
  });

  const { isOpen: isShowPassword, onToggle: onShowPassword } = useDisclosure();
  const { isOpen: isShowConfirmPassword, onToggle: onShowConfirmPassword } =
    useDisclosure();

  const renderPasswordIcon = useCallback(
    (isCorrect: boolean, callback: typeof onShowPassword): JSX.Element => {
      const Icon = isCorrect ? ViewIcon : ViewOffIcon;

      return (
        <Icon
          color="gray.400"
          w="25px"
          h="25px"
          cursor="pointer"
          onClick={callback}
        />
      );
    },
    [],
  );

  const handleClearErrorMessage = useCallback(
    (
      field: keyof ISignUpForm,
      isError: boolean,
      onChange: (value: string) => void,
    ) =>
      (data: string) => {
        isError && clearErrors(field);

        onChange(data);
      },
    [clearErrors],
  );

  const handleSignUp = useCallback(
    (data: Omit<TUser, 'id'>) => onSubmit(data),
    [onSubmit],
  );

  return (
    <Stack w="556px" mb="30px" alignItems="center" justifyContent="center">
      <Box mb="36px" textAlign="center">
        <Heading as="h1" mb="8px" variant="tertiary" size="size4xl">
          Sign Up to get started
        </Heading>
        <Text variant="quaternary" size="textMd">
          Enter your details to proceed further
        </Text>
      </Box>

      <VStack
        w="100%"
        gap="10px"
        alignItems="center"
        mb="24px"
        as="form"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const handleChange = (valueInput: string) => {
              const sanitizedValue = valueInput.trim();

              !!error && clearErrors('email');
              onChange(sanitizedValue);
            };

            return (
              <InputField
                label="Email"
                variant="form"
                isError={!!error?.message}
                errorMessages={error?.message}
                isDisabled={isDisabled}
                value={value}
                onChange={handleChange}
                onBlur={handleClearRootError}
              />
            );
          }}
        />

        <Flex w="full" flexDirection="row" gap="12px" alignItems="center">
          <Controller
            control={control}
            name="firstName"
            render={({ field, fieldState: { error } }) => (
              <InputField
                label="First Name"
                variant="form"
                isError={!!error}
                errorMessages={error?.message}
                isDisabled={isSubmitting}
                {...field}
                onChange={handleClearErrorMessage(
                  'firstName',
                  !!error,
                  field.onChange,
                )}
                aria-label="first name"
              />
            )}
          />

          <Controller
            control={control}
            name="lastName"
            render={({ field, fieldState: { error } }) => (
              <InputField
                label="Last Name"
                variant="form"
                isError={!!error}
                errorMessages={error?.message}
                isDisabled={isSubmitting}
                {...field}
                onChange={handleClearErrorMessage(
                  'lastName',
                  !!error,
                  field.onChange,
                )}
                aria-label="name"
              />
            )}
          />
        </Flex>

        <Controller
          control={control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <InputField
              label="Password"
              type={isShowPassword ? 'text' : 'password'}
              variant="form"
              rightIcon={renderPasswordIcon(isShowPassword, onShowPassword)}
              isError={!!error?.message}
              errorMessages={error?.message}
              isDisabled={isDisabled}
              {...field}
              onChange={handleClearErrorMessage(
                'password',
                !!error,
                field.onChange,
              )}
              onBlur={handleClearRootError}
            />
          )}
        />

        <>
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field, fieldState: { error } }) => (
              <InputField
                label="Confirm password"
                type={isShowConfirmPassword ? 'text' : 'password'}
                variant="form"
                rightIcon={renderPasswordIcon(
                  isShowConfirmPassword,
                  onShowConfirmPassword,
                )}
                {...field}
                isError={!!error}
                errorMessages={error?.message}
                isDisabled={isSubmitting}
                onChange={handleClearErrorMessage(
                  'confirmPassword',
                  !!error,
                  field.onChange,
                )}
              />
            )}
          />
        </>
        <Box mb={7} w="76%">
          <Text color="red" textAlign="center" py={2} h={10}>
            {errorMessage}
          </Text>
          <Button
            width="100%"
            py="26px"
            type="submit"
            role="button"
            aria-label="Sign Up"
            size="md"
            variant="auth"
            colorScheme="primary"
            textTransform="capitalize"
            isDisabled={isDisabled}
          >
            SIGN UP
          </Button>
        </Box>
      </VStack>

      <Flex justifyContent="center" alignItems="center" mb="100px">
        <Text
          variant="quaternary"
          textAlign="center"
          dangerouslySetInnerHTML={{
            __html: 'Already have an account?',
          }}
        />
        <Button
          as={Link}
          href={ROUTER.LOGIN}
          aria-label="sign in"
          w="fit-content"
          p={0}
          _hover={{
            bg: 'transparent',
          }}
          fontSize="md"
          variant="authTertiary"
          ml={1}
        >
          Sign in
        </Button>
      </Flex>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Flex flexDirection="row" gap="18px" alignItems="center" mb="14px">
          <LineIcon />
          <Text variant="quaternary">Or</Text>
          <LineIcon />
        </Flex>
        <Button
          variant="iconPrimary"
          size="md"
          position="relative"
          isDisabled={true}
        >
          <Box position="absolute" top="17px" left="18px">
            <GoogleIcon />
          </Box>
          Sign Up with Google
        </Button>
      </Flex>
    </Stack>
  );
};

export default SignUpForm;
