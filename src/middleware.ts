// Libs
import NextAuth from 'next-auth';

// Auth configs
import { authConfig } from './configs/auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: [
    '/((?!api|_next/static|sitemap.xml|robots.txt|_next/image|.*\\.png$).*)',
  ],
};
