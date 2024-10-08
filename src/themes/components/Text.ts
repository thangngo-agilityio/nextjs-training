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
    text4Xl: {
      fontSize: '4xl',
    },
    text9xl: {
      fontSize: '9xl',
    },
    text10xl: {
      fontSize: '10xl',
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
    productPrimary: {
      color: 'text.1400',
    },
    productCard: {
      fontFamily: 'lufgaSemiBold',
      color: 'text.600',
    },
    footer: {
      color: 'text.1600',
      fontWeight: '400',
      fontFamily: 'poppins',
    },
    footerPrimary: {
      color: 'text.100',
      fontWeight: '700',
      fontFamily: 'poppins',
    },
    copyright: {
      color: 'text.1700',
      fontWeight: '400',
      fontFamily: 'poppins',
    },
    quantity: {
      color: 'text.300',
      fontFamily: 'lufgaBold',
    },
    totalCart: {
      color: 'text.700',
      fontFamily: 'lufgaBold',
    },
  },
  defaultProps: {
    size: 'textMd',
    variant: 'primary',
  },
});
