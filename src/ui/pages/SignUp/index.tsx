'use client';

import { Flex } from '@chakra-ui/react';
import { useCallback, useTransition } from 'react';
import { useRouter } from 'next/navigation';

// Action
import { createCart, signInWithEmail, signUp } from '@/actions';

// Components
import { SignUpForm } from '@/components';

// Hooks
import { useCustomToast } from '@/hooks';

// Types
import { TUser } from '@/types';

// Constants
import { ROUTER, SUCCESS_MESSAGES } from '@/constants';

const SignUpPage = () => {
  const { showToast } = useCustomToast();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSignUp = useCallback(
    async (data: TUser) => {
      startTransition(async () => {
        const signUpRes = await signUp(data);

        const { error: signUpError, data: user } = signUpRes || {};

        if (signUpError) {
          return showToast(signUpError);
        }

        const { id: userId = '' } = user || {};

        const createCartRes = await createCart([], userId);

        const { error: createCartError } = createCartRes || {};

        if (createCartError) {
          return showToast(createCartError);
        }

        const { email, password } = data;

        const signInRes = await signInWithEmail({ email, password });

        if (typeof signInRes === 'string') {
          return showToast(signInRes);
        } else {
          showToast(SUCCESS_MESSAGES.LOGIN, 'success');
        }

        return router.push(ROUTER.HOME);
      });
    },
    [showToast, router],
  );

  return (
    <Flex
      h="100%"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <SignUpForm onSubmit={handleSignUp} isPending={isPending} />
    </Flex>
  );
};

export default SignUpPage;
