import { ThemeOverride } from '@chakra-ui/react';
import LocalFont from 'next/font/local';

export const fontSizes: ThemeOverride['fontSizes'] = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '16px',
  xl: '20px',
  '2xl': '30px',
  '3xl': '28px',
  '4xl': '36px',
  '5xl': '60px',
};

export const lufga = LocalFont({ src: '../../assets/fonts/LufgaRegular.ttf' });

export const fonts = {
  primary: `${lufga.style.fontFamily}, sans-serif`,
};
