import { Flex } from '@chakra-ui/react';

// Components
import { AuthForm } from '@/components';

const SignInPage = () => (
  <Flex h="100%" justifyContent="center" alignItems="center">
    <AuthForm onSubmit={() => {}} isRegister />
  </Flex>
);

export default SignInPage;
