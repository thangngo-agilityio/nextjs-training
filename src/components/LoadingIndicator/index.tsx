// Libs
import { Box, Spinner as SpinnerChakraUI } from '@chakra-ui/react';

const LoadingIndicator = (): JSX.Element => (
  <Box
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      zIndex: 9999,
      opacity: '.7',
    }}
  >
    <SpinnerChakraUI size="lg" thickness="4px" speed="0.8s" color="blue.500" />
  </Box>
);

export default LoadingIndicator;
