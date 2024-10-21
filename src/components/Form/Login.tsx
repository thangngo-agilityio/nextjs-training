'use client';

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import Link from 'next/link';

// Component
import { InputField } from '../common';
import { GoogleIcon, LineIcon } from '@/icons';

// Constants
import {
  AUTH_SCHEMA,
  REQUIRED_FIELDS_LOGIN,
  ROUTER,
  TSignInForm,
} from '@/constants';

// Types
import { LoginFormData } from '@/types';

// Utils
import { isEnableSubmitButton } from '@/utils';

type TAuthFormProps = {
  isPending?: boolean;
  errorMessage?: string;
  onChange?: (value: string) => void;
  handleClearRootError?: () => void;
  handleSubmit?: () => void;
  onSubmit: (data: TSignInForm) => void;
};

const LoginForm = ({
  isPending,
  errorMessage = '',
  handleClearRootError,
  onSubmit,
}: TAuthFormProps) => {
  const {
    control,
    formState: { dirtyFields, errors },
    handleSubmit,
    clearErrors,
  } = useForm<LoginFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { isOpen: isShowPassword, onToggle: onShowPassword } = useDisclosure();

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
      field: keyof LoginFormData,
      isError: boolean,
      onChange: (value: string) => void,
    ) =>
      (data: string) => {
        isError && clearErrors(field);

        onChange(data);
      },
    [clearErrors],
  );

  const handleSignIn = useCallback(
    (data: TSignInForm) => onSubmit(data),
    [onSubmit],
  );

  const dirtyItems = Object.keys(dirtyFields);

  const enableSubmit: boolean = useMemo(
    () => isEnableSubmitButton(REQUIRED_FIELDS_LOGIN, dirtyItems, errors),
    [dirtyItems, errors],
  );
  const isDisableSubmit = !enableSubmit;

  return (
    <Stack
      w={{ base: '100%', lg: '556px' }}
      px={{ base: '28px', lg: 'unset' }}
      mb="30px"
      alignItems="center"
      justifyContent="center"
    >
      <Box mb="36px" textAlign="center">
        <Heading as="h1" mb="8px" variant="tertiary" size="size4xl">
          Welcome Back!
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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Controller
          control={control}
          rules={AUTH_SCHEMA.EMAIL}
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
                value={value}
                onChange={handleChange}
                onBlur={handleClearRootError}
              />
            );
          }}
        />

        <Controller
          control={control}
          rules={AUTH_SCHEMA.PASSWORD}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <InputField
              label="Your password"
              type={isShowPassword ? 'text' : 'password'}
              variant="form"
              rightIcon={renderPasswordIcon(isShowPassword, onShowPassword)}
              isError={!!error?.message}
              errorMessages={error?.message}
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

        <HStack justifyContent="space-between" w="100%" mt="10px">
          <Checkbox aria-label="remember" variant="round" position="relative">
            <Text variant="quinary" fontWeight="bold">
              Remember me
            </Text>
          </Checkbox>
          <Button
            variant="authSecondary"
            px={0}
            fontSize="md"
            w="fit-content"
            aria-label="recover password"
            textTransform="capitalize"
          >
            Recover password
          </Button>
        </HStack>

        <Box mb={7} w="76%">
          <Text color="red" textAlign="center" py={2} h={10}>
            {errorMessage}
          </Text>
          <Button
            width="100%"
            py="26px"
            type="submit"
            role="button"
            aria-label="Sign In"
            size="md"
            variant="auth"
            colorScheme="primary"
            textTransform="capitalize"
            isDisabled={isDisableSubmit}
            isLoading={isPending}
          >
            SIGN IN
          </Button>
        </Box>
      </VStack>

      <Flex justifyContent="center" alignItems="center" mb="100px">
        <Text
          variant="quaternary"
          textAlign="center"
          dangerouslySetInnerHTML={{
            __html: 'Don&apos;t have an account?',
          }}
        />
        <Button
          as={Link}
          href={ROUTER.REGISTER}
          aria-label="sign up"
          w="fit-content"
          p={0}
          _hover={{
            bg: 'transparent',
          }}
          fontSize="md"
          variant="authTertiary"
          ml={1}
        >
          Sign up
        </Button>
      </Flex>
      <Flex
        w={{ base: '100%', lg: 'unset' }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
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

export default LoginForm;
