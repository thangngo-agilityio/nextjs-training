import { ThemeOverride } from '@chakra-ui/react';
import LocalFont from 'next/font/local';
import { Inter, Montserrat, Poppins } from 'next/font/google';

export const fontSizes: ThemeOverride['fontSizes'] = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '16px',
  xl: '18px',
  '2xl': '20px',
  '3xl': '22px',
  '4xl': '34px',
  '5xl': '40px',
  '6xl': '50px',
  '7xl': '60px',
  '8xl': '36px',
};

export const lufga = LocalFont({ src: '../../assets/fonts/LufgaRegular.ttf' });

export const lufgaExtraBold = LocalFont({
  src: '../../assets/fonts/LufgaExtraBold.ttf',
});

export const lufgaBold = LocalFont({
  src: '../../assets/fonts/LufgaBold.ttf',
});

export const lufgaSemiBold = LocalFont({
  src: '../../assets/fonts/LufgaBold.ttf',
});

export const inter = Inter({ subsets: ['latin'] });

export const montserrat = Montserrat({ subsets: ['latin'] });

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const fonts = {
  lufga: `${lufga.style.fontFamily}, sans-serif`,
  lufgaSemiBold: `${lufgaSemiBold.style.fontFamily}, sans-serif`,
  lufgaBold: `${lufgaBold.style.fontFamily}, sans-serif`,
  lufgaExtraBold: `${lufgaExtraBold.style.fontFamily}, sans-serif`,
  inter: `${inter.style.fontFamily}, sans-serif`,
  montserrat: `${montserrat.style.fontFamily}, sans-serif`,
  poppins: `${poppins.style.fontFamily}, sans-serif`,
};
