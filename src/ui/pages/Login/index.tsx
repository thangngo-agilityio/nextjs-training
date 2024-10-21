'use client';

import { useRouter } from 'next/navigation';
import { Flex } from '@chakra-ui/react';
import { useCallback, useState, useTransition } from 'react';

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
  const [isPending, startTransition] = useTransition();
  const { showToast } = useCustomToast();

  const router = useRouter();

  const handleSignIn = useCallback(
    (data: TSignInForm) => {
      startTransition(async () => {
        const res = await signInWithEmail(data);

        if (typeof res === 'string') {
          setErrorMessage(
            formatUppercaseFirstLetter(ERROR_MESSAGES.AUTH_INCORRECT),
          );
        } else {
          setErrorMessage('');
          showToast(SUCCESS_MESSAGES.LOGIN, 'success');
        }

        return router.push(ROUTER.HOME);
      });
    },
    [router, showToast],
  );

  return (
    <Flex
      h="100%"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <LoginForm
        onSubmit={handleSignIn}
        isPending={isPending}
        errorMessage={errorMessage}
      />
    </Flex>
  );
};

export default LoginPage;
