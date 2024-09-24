'use client';

// import { useRouter } from 'next/navigation';
import { Flex } from '@chakra-ui/react';
// import { useCallback, useState } from 'react';

// Components
import { AuthForm } from '@/components';

// Constants
// import { TSignInForm } from '@/constants';

const LoginPage = () => (
  <Flex h="100%" justifyContent="center" alignItems="center">
    <AuthForm />
  </Flex>
);
// const LoginPage = () => {
//   const [isPending, setIsPending] = useState(false);

//   const router = useRouter();

//   const handleSignIn = useCallback(async (data: TSignInForm) => {
//     setIsPending(true);

//   }, []);

//   return (
//     <Flex h="100%" justifyContent="center" alignItems="center">
//       <AuthForm isDisabled={isPending} />
//     </Flex>
//   );
// };

export default LoginPage;
