'use client';

import { Flex } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

// Action
import { signInWithEmail, signUp } from '@/actions';

// Components
import { SignUpForm } from '@/components';

// Hooks
import { useCustomToast } from '@/hooks';

// Types
import { TUser } from '@/types';

// Constants
import { ROUTER } from '@/constants';

const SignInPage = () => {
  const [isPending, setIsPending] = useState(false);
  const { showToast } = useCustomToast();
  const router = useRouter();

  const handleSignUp = useCallback(
    async (data: Omit<TUser, 'id'>) => {
      setIsPending(true);

      const signUpRes = await signUp(data);

      const { error: signUpError } = signUpRes || {};

      if (signUpError) {
        setIsPending(false);

        return showToast(signUpError);
      }

      const { email, password } = data;

      const signInRes = await signInWithEmail({ email, password });

      if (typeof signInRes === 'string') {
        setIsPending(false);

        return showToast(signInRes);
      }

      return router.push(ROUTER.HOME);
    },
    [showToast, router],
  );

  return (
    <Flex h="100%" justifyContent="center" alignItems="center">
      <SignUpForm onSubmit={handleSignUp} isDisabled={isPending} />
    </Flex>
  );
};

export default SignInPage;
