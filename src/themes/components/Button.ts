import { defineStyleConfig } from '@chakra-ui/react';

// The default style for Button component
export const Button = defineStyleConfig({
  baseStyle: {
    color: 'text.100',
    py: 3,
    opacity: 1,
    _focus: {
      outline: 'none',
    },
    _hover: {
      opacity: 0.7,
    },
  },
  sizes: {
    xs: {
      py: 3.5,
      px: 4,
      fontSize: 'xs',
    },
    sm: {
      px: 7,
      fontSize: 'sm',
    },
    md: {
      px: 10,
      fontSize: 'md',
    },
    lg: {
      px: 11,
      fontSize: 'lg',
    },
    xl: {
      py: 4,
      fontSize: 'xl',
      width: '100%',
    },
    xxl: {
      px: '42px',
      py: '22px',
      fontSize: '2xl',
    },
    icon: {
      p: '22px',
    },
  },
  variants: {
    default: {
      fontWeight: 'bold',
      border: 'none',
      borderRadius: 'sm',
      backgroundColor: 'background.300',
    },
    error: {
      borderRadius: '2xl',
      backgroundColor: 'danger.300',
    },
    auth: {
      fontFamily: 'inter',
      borderRadius: 'lg',
      bgColor: 'background.200',
      color: 'text.100',
    },
    authSecondary: {
      color: 'text.500',
      fontFamily: 'inter',
      fontWeight: 'bold',
    },
    authTertiary: {
      color: 'text.300',
      fontFamily: 'inter',
      fontWeight: 'bold',
    },
    iconPrimary: {
      w: '100%',
      py: '25px',
      fontFamily: 'inter',
      color: 'text.900',
      backgroundColor: 'transparent',
      borderRadius: 'lg',
      borderColor: 'border.200',
      borderWidth: '1px',
      opacity: '1 !important',
    },
  },
  defaultProps: {
    size: 'xs',
    variant: 'default',
  },
});
