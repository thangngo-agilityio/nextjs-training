import { defineStyleConfig } from '@chakra-ui/react';

// The default style for Button component
export const Button = defineStyleConfig({
  baseStyle: {
    color: 'text.100',
    py: 3,
    _focus: {
      outline: 'none',
    },
    _hover: {
      opacity: 0.9,
    },
  },
  sizes: {
    xs: {
      w: 'fit-content',
      py: '18px',
      px: '14px',
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
    size3xl: {
      w: 'fit-content',
      px: '26px',
      py: '22px',
      fontSize: '3xl',
    },
    size4xl: {
      w: 'fit-content',
      px: '42px',
      py: '22px',
      fontSize: '4xl',
    },
    size4xlSecond: {
      w: 'fit-content',
      h: 'fit-content',
      px: '100px',
      py: '30px',
      fontSize: '4xl',
    },
    icon: {
      p: '22px',
    },
    quantity: {
      w: '26px',
      h: '26px',
    },
    productDetail: {
      w: 'fit-content',
      paddingX: '40px',
      paddingY: '20px',
      fontSize: '2xl',
    },
    orderSuccess: {
      w: 'fit-content',
      px: '170px',
      py: '16px',
      fontSize: 'md',
    },
    showroomMobile: {
      w: 'fit-content',
      fontSize: 'xs',
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
      _hover: {
        _disabled: {
          bgColor: 'background.200',
          opacity: '.7',
        },
      },
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
    iconSecondary: {
      borderRadius: 'md',
      backgroundColor: 'background.100',
      boxShadow: '0 2px 5.5px 0 rgba(0, 0 , 0, .25)',
      _hover: {
        backgroundColor: 'background.900',
      },
    },
    showroom: {
      w: 'fit-content',
      bgColor: 'background.1000',
      color: 'text.100',
      borderRadius: 'xl',
      opacity: 1,
      _hover: {
        opacity: 0.8,
      },
    },
    showroomMobile: {
      w: 'fit-content',
      bgColor: 'transparent',
      color: 'text.1200',
      opacity: 1,
      _hover: {
        opacity: 0.8,
      },
    },
    footer: {
      w: 'fit-content',
      color: 'text.1500',
      bgColor: 'none',
      textDecor: 'underline',
    },
    quantity: {
      display: 'flex',
      borderRadius: '100%',
      bgColor: 'background.1300',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buy: {
      bg: 'background.200',
      color: 'text.100',
      borderRadius: '5xl',
      fontFamily: 'lufgaSemiBold',
      boxShadow: '0 6px 14px 4px rgba(164, 237, 163, 32.48%)',
      transition: '.2s ease-in',
      border: '1px solid',
      borderColor: 'border.600',
      _hover: {
        color: 'text.1200',
        boxShadow: 'none',
        background: 'transparent',
      },
    },
    cart: {
      bg: 'transparent',
      color: 'text.700',
      border: '1px solid',
      borderColor: 'border.400',
      borderRadius: '5xl',
      fontFamily: 'lufgaSemiBold',
      transition: '.2s ease-in',
      _hover: {
        color: 'text.100',
        bgColor: 'background.300',
      },
    },
    checkout: {
      bg: 'background.200',
      color: 'text.100',
      borderRadius: 'xs',
      fontFamily: 'lufgaSemiBold',
      transition: '.2s ease-in',
      border: '1px solid',
      borderColor: 'border.600',
      _hover: {
        color: 'text.1200',
        background: 'transparent',
      },
    },
    orderSuccess: {
      bg: 'background.200',
      color: 'text.100',
      borderRadius: 'lg',
      fontFamily: 'lufgaBold',
      transition: '.2s ease-in',
      border: '1px solid',
      borderColor: 'border.600',
      _hover: {
        color: 'text.1200',
        background: 'transparent',
      },
    },
  },
  defaultProps: {
    size: 'xs',
    variant: 'default',
  },
});
