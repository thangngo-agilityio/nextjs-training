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
  },
  defaultProps: {
    size: 'textMd',
    variant: 'primary',
  },
});
