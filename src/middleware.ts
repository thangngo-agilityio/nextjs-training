// Libs
import NextAuth from 'next-auth';

// Auth configs
import { authConfig } from './configs/auth.config';

export default NextAuth(authConfig).auth;

// Routes Middleware should not run on
export const config = {
  matcher: [
    '/((?!api|_next/static|sitemap.xml|robots.txt|_next/image|.*\\.png$).*)',
  ],
};
