import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  baseStyle: {
    fontWeight: 400,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  sizes: {
    textXs: {
      fontSize: 'xs',
    },
    textSm: {
      fontSize: 'sm',
    },
    textMd: {
      fontSize: 'md',
    },
    textLg: {
      fontSize: 'lg',
    },
    textXl: {
      fontSize: 'xl',
    },
    text2Xl: {
      fontSize: '2xl',
    },
  },
  variants: {
    primary: {
      color: 'text.200',
    },
    secondary: {
      color: 'text.100',
    },
    tertiary: {
      color: 'text.700',
    },
    quaternary: {
      color: 'text.900',
      fontFamily: 'inter',
    },
    quinary: {
      color: 'text.1000',
      fontFamily: 'inter',
    },
    senary: {
      color: 'text.1100',
    },
    septenary: {
      color: 'text.400',
    },
    productCard: {
      fontFamily: 'lufgaSemiBold',
      color: 'text.600',
    },
  },
  defaultProps: {
    size: 'textMd',
    variant: 'primary',
  },
});
