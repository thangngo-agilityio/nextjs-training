import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  baseStyle: {
    fontFamily: 'lufga',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    _firstLetter: {
      textTransform: 'uppercase',
    },
  },

  sizes: {
    xs: {
      fontSize: 'xs',
    },
    md: {
      fontSize: 'md',
    },
    lg: {
      fontSize: 'lg',
    },
    xl: {
      fontSize: 'xl',
    },
    size2xl: {
      fontSize: '2xl',
    },
    size4xl: {
      fontSize: '4xl',
    },
    size5xl: {
      fontSize: '5xl',
    },
    size6xl: {
      fontSize: '6xl',
    },
    size7xl: {
      fontSize: '7xl',
    },
    size8xl: {
      fontSize: '8xl',
    },
    size9xl: {
      fontSize: '9xl',
    },
  },
  variants: {
    primary: {
      color: 'text.200',
    },
    secondary: {
      fontFamily: 'lufgaBold',
      color: 'text.100',
    },
    tertiary: {
      color: 'text.700',
      fontFamily: 'montserrat',
      fontWeight: 900,
    },
    quaternary: {
      color: 'text.300',
    },
    quinary: {
      fontFamily: 'lufgaBold',
      color: 'text.1200',
    },
    senary: {
      color: 'text.1300',
    },
    septenary: {
      color: 'text.700',
      fontFamily: 'lufgaBold',
    },
    product: {
      color: 'text.800',
      fontFamily: 'lufgaBold',
    },
    footerPrimary: {
      color: 'text.800',
      fontFamily: 'poppins',
      fontWeight: '700',
    },
    footerSecondary: {
      color: 'text.100',
      fontFamily: 'poppins',
      fontWeight: '600',
    },
    productTitle: {
      color: 'text.1100',
      fontFamily: 'lufgaBold',
    },
    orderSuccess: {
      color: 'text.1800',
      fontFamily: 'lufgaSemiBold',
    },
  },

  defaultProps: {
    size: 'lg',
    variant: 'primary',
  },
});
