import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  baseStyle: {
    field: {
      fontFamily: 'inter',
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
  variants: {
    form: {
      field: {
        px: '20px',
        pt: '36px',
        pb: '30px',
        _focus: { borderColor: 'border.500' },
        _valid: { borderColor: 'border.500' },
      },
    },
    search: {
      field: {
        py: '12px',
      },
    },
  },
});
