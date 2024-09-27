'use client';

import { useRouter } from 'next/navigation';
import { Flex } from '@chakra-ui/react';
import { useCallback, useState } from 'react';

// Components
import { AuthForm } from '@/components';

// Constants
import { ROUTER, TSignInForm } from '@/constants';

// Actions
import { signInWithEmail } from '@/actions/auth';

const LoginPage = () => {
  const [isPending, setIsPending] = useState(false);

  const router = useRouter();

  const handleSignIn = useCallback(
    async (data: TSignInForm) => {
      setIsPending(true);

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
      <AuthForm onSubmit={handleSignIn} isDisabled={isPending} />
    </Flex>
  );
};

export default LoginPage;
