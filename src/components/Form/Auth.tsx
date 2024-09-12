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
import { ChangeEvent, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';

// Component
import { InputField } from '../common';
import { AuthFormData } from '@/constants';
import { GoogleIcon, LineIcon } from '@/icons';

type TAuthFormProps = {
  isRegister?: boolean;
  isDisabled?: boolean;
  errorMessage?: string;
  onChange?: (value: string) => void;
  handleClearRootError?: () => void;
  handleSubmit?: () => void;
  // onSubmit: (data: AuthFormData) => void;
};

const AuthForm = ({
  isRegister = false,
  isDisabled = false,
  errorMessage = '',
  handleClearRootError,
  // onSubmit,
}: TAuthFormProps) => {
  // const navigate = useNavigate();

  const {
    control,
    formState: { isSubmitting },
    clearErrors,
  } = useForm<AuthFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',

      ...(isRegister && {
        name: '',
        confirmPassword: '',
      }),
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

  // const handleNavigate = () => {
  //   navigate(isRegister ? ROUTES.SIGN_IN : ROUTES.SIGN_UP);
  // };

  const handleClearErrorMessage = useCallback(
    (
      field: keyof AuthFormData,
      isError: boolean,
      onChange: (value: string) => void,
    ) =>
      (data: string) => {
        isError && clearErrors(field);

        onChange(data);
      },
    [clearErrors],
  );

  return (
    <Stack
      w="556px"
      px={isRegister ? '51px' : '0px'}
      py={isRegister ? '46px' : '0px'}
      mb="30px"
      borderRadius={isRegister ? 'xl' : 'unset'}
      boxShadow={isRegister ? '0 7px 23px rgba(0, 0 , 0, .05)' : 'unset'}
      bg={isRegister ? 'background.100' : 'transparent'}
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
        alignItems="flex-start"
        mb="24px"
        as="form"
        onSubmit={() => {}}
      >
        {isRegister && (
          <Flex flexDirection="row" alignItems="center">
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
        )}
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const handleChange = (valueInput: string) => {
              const sanitizedValue = valueInput.trim();

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
              onBlur={handleClearRootError}
            />
          )}
        />

        {/* Helpers */}
        {!isRegister && (
          <HStack justifyContent="space-between" w="100%" mt="10px">
            <Controller
              control={control}
              name="isRemember"
              render={({ field: { value, onChange } }) => (
                <Checkbox
                  aria-label="remember"
                  variant="round"
                  isChecked={value}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onChange(e.target.checked)
                  }
                  isDisabled={isSubmitting}
                  position="relative"
                >
                  <Text variant="quinary" fontWeight="bold">
                    Remember me
                  </Text>
                </Checkbox>
              )}
            />
            <Button
              isDisabled={isSubmitting}
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
        )}

        {isRegister && (
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
        )}
      </VStack>

      <Box mb={7} w="76%">
        <Text color="red" textAlign="center" py={2} h={10}>
          {errorMessage}
        </Text>
        <Button
          width="100%"
          py="26px"
          type="submit"
          role="button"
          aria-label={!isRegister ? 'Sign In' : 'Sign Up'}
          size="md"
          variant="auth"
          colorScheme="primary"
          textTransform="capitalize"
          form={!isRegister ? 'login-form' : 'register-form'}
          isDisabled={isDisabled}
          onClick={() => {}}
        >
          {!isRegister ? 'SIGN IN' : 'SIGN UP'}
        </Button>
      </Box>

      <Flex justifyContent="center" mb="100px">
        <Text
          variant="quaternary"
          textAlign="center"
          dangerouslySetInnerHTML={{
            __html: !isRegister
              ? 'Don&apos;t have an account?'
              : 'Already have an account?',
          }}
        />
        <Button
          aria-label={!isRegister ? 'sign up' : 'sign in'}
          w="fit-content"
          p={0}
          _hover={{
            bg: 'transparent',
          }}
          fontSize="md"
          variant="authTertiary"
          ml={1}
          onClick={() => {}}
        >
          {!isRegister ? 'Sign up' : 'Sign in'}
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

export default AuthForm;
