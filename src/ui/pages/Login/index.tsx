'use client';

import { useRouter } from 'next/navigation';
import { Flex } from '@chakra-ui/react';
import { useCallback, useState } from 'react';

// Components
import { LoginForm } from '@/components';

// Constants
import { ROUTER, TSignInForm } from '@/constants';

// Actions
import { signInWithEmail } from '@/actions/auth';
import { auth } from '@/configs';

const LoginPage = () => {
  const [isPending, setIsPending] = useState(false);

  const router = useRouter();

  const handleSignIn = useCallback(
    async (data: TSignInForm) => {
      setIsPending(true);

      const session = await auth();

      const userId = session?.user?.id || '';

      console.log('userId', userId);

      const res = await signInWithEmail(data);

      if (typeof res === 'string') {
        setIsPending(false);
      }

      return router.push(ROUTER.HOME);
    },
    [router],
  );

  return (
    <Flex h="100%" justifyContent="center" alignItems="center">
      <LoginForm onSubmit={handleSignIn} isDisabled={isPending} />
    </Flex>
  );
};

export default LoginPage;
