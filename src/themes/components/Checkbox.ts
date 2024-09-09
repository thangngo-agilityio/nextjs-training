import { defineStyleConfig } from '@chakra-ui/react';

// The default style for Checkbox component
export const Checkbox = defineStyleConfig({
  baseStyle: {
    control: {
      width: 5,
      height: 5,
      bg: 'background.600',
      _checked: {
        backgroundColor: 'background.600',
        _hover: {
          backgroundColor: 'background.600',
        },
        border: 'none',
      },
    },
    icon: {
      color: 'white',
      fontSize: 'xs',
    },
  },
  variants: {
    round: {
      control: {
        borderRadius: 'full',
      },
    },
  },
});
