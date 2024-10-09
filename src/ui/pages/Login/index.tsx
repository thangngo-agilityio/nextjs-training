'use client';

import { useRouter } from 'next/navigation';
import { Flex } from '@chakra-ui/react';
import { useCallback, useState } from 'react';

// Components
import { LoginForm } from '@/components';

// Hooks
import { useCustomToast } from '@/hooks';

// Constants
import {
  ERROR_MESSAGES,
  ROUTER,
  SUCCESS_MESSAGES,
  TSignInForm,
} from '@/constants';

// Actions
import { signInWithEmail } from '@/actions/auth';
import { formatUppercaseFirstLetter } from '@/utils';

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isPending, setIsPending] = useState(false);
  const { showToast } = useCustomToast();

  const router = useRouter();

  const handleSignIn = useCallback(
    async (data: TSignInForm) => {
      setIsPending(true);

      const res = await signInWithEmail(data);

      if (typeof res === 'string') {
        setIsPending(false);
        setErrorMessage(
          formatUppercaseFirstLetter(ERROR_MESSAGES.AUTH_INCORRECT),
        );
      } else {
        showToast(SUCCESS_MESSAGES.LOGIN, 'success');
      }

      return router.push(ROUTER.HOME);
    },
    [router, showToast],
  );

  return (
    <Flex h="100%" justifyContent="center" alignItems="center">
      <LoginForm
        onSubmit={handleSignIn}
        isDisabled={isPending}
        errorMessage={errorMessage}
      />
    </Flex>
  );
};

export default LoginPage;
