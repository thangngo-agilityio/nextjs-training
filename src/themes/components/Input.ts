import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  baseStyle: {
    field: {
      fontFamily: 'inter',
      px: '20px',
      py: '15px',
      height: '50px',
      borderRadius: 'sm',
      borderWidth: '1px',
      borderColor: 'border.200',
      borderStyle: 'solid',
      color: 'text.1000',
      bgColor: 'background.100',
      _placeholder: {
        color: 'text.400',
        fontSize: 'sm',
      },
    },
  },
});
