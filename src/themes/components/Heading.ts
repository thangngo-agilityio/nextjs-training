import { defineStyleConfig } from '@chakra-ui/react';

export const Heading = defineStyleConfig({
  baseStyle: {
    fontFamily: 'primary',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  sizes: {
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
    xxl: {
      fontSize: '5xl',
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
  },

  defaultProps: {
    size: 'lg',
    variant: 'primary',
  },
});
