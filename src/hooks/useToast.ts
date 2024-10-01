// Libs
import { useToast, UseToastOptions } from '@chakra-ui/react';

type Status = 'success' | 'error' | 'warning' | 'info';
type CustomToastHook = {
  showToast: (
    message: string,
    status?: Status,
    options?: UseToastOptions,
  ) => void;
};

export const useCustomToast = (): CustomToastHook => {
  const toast = useToast();

  const showToast = (
    message: string,
    status: Status = 'error',
    options?: UseToastOptions,
  ) => {
    toast({
      position: 'top',
      status: status,
      title: message,
      duration: 3000,
      isClosable: true,
      ...options,
    });
  };

  return { showToast };
};
