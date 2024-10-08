'use client';

import { useRouter } from 'next/navigation';
import { Flex } from '@chakra-ui/react';
import { useCallback, useState } from 'react';

// Components
import { LoginForm } from '@/components';

// Hooks
import { useCustomToast } from '@/hooks';

// Constants
import { ROUTER, SUCCESS_MESSAGES, TSignInForm } from '@/constants';

// Actions
import { signInWithEmail } from '@/actions/auth';

const LoginPage = () => {
  const [isPending, setIsPending] = useState(false);
  const { showToast } = useCustomToast();

  const router = useRouter();

  const handleSignIn = useCallback(
    async (data: TSignInForm) => {
      setIsPending(true);

      const res = await signInWithEmail(data);

      if (typeof res === 'string') {
        setIsPending(false);
      } else {
        showToast(SUCCESS_MESSAGES.LOGIN, 'success');
      }

      return router.push(ROUTER.HOME);
    },
    [router, showToast],
  );

  return (
    <Flex h="100%" justifyContent="center" alignItems="center">
      <LoginForm onSubmit={handleSignIn} isDisabled={isPending} />
    </Flex>
  );
};

export default LoginPage;
