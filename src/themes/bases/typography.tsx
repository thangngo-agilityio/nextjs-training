import { ThemeOverride } from '@chakra-ui/react';
import LocalFont from 'next/font/local';
import { Inter, Montserrat } from 'next/font/google';

export const fontSizes: ThemeOverride['fontSizes'] = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '16px',
  xl: '18px',
  '2xl': '30px',
  '3xl': '28px',
  '4xl': '34px',
  '5xl': '60px',
};

export const lufga = LocalFont({ src: '../../assets/fonts/LufgaRegular.ttf' });

export const lufgaExtraBold = LocalFont({
  src: '../../assets/fonts/LufgaExtraBold.ttf',
});

export const inter = Inter({ subsets: ['latin'] });

export const montserrat = Montserrat({ subsets: ['latin'] });

export const fonts = {
  lufga: `${lufga.style.fontFamily}, sans-serif`,
  lufgaExtraBold: `${lufgaExtraBold.style.fontFamily}, sans-serif`,
  inter: `${inter.style.fontFamily}, sans-serif`,
  montserrat: `${montserrat.style.fontFamily}, sans-serif`,
};
