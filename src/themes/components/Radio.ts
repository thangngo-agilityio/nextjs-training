import { defineStyleConfig } from '@chakra-ui/react';

export const Radio = defineStyleConfig({
  baseStyle: {
    control: {
      display: 'none',
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      m: 0,
      alignItems: 'center',
    },
  },
});
