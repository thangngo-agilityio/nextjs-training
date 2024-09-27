import { Flex } from '@chakra-ui/react';

// Components
import { SignUpForm } from '@/components';

const SignInPage = () => (
  <Flex h="100%" justifyContent="center" alignItems="center">
    <SignUpForm onSubmit={() => {}} />
  </Flex>
);

export default SignInPage;
