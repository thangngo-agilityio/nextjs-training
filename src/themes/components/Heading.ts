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
    size4xl: {
      fontSize: '4xl',
    },
    size5xl: {
      fontSize: '5xl',
    },
    size6xl: {
      fontSize: '6xl',
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
  },

  defaultProps: {
    size: 'lg',
    variant: 'primary',
  },
});
