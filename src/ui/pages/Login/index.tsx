import { Box, Flex } from '@chakra-ui/react';

// Components
import { AuthForm } from '@/components';

const LoginPage = () => (
  <Flex h="100%" justifyContent="center" alignItems="center">
    <Box>
      <AuthForm />
    </Box>
  </Flex>
);

export default LoginPage;
