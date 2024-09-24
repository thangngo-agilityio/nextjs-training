import type { NextAuthConfig } from 'next-auth';

// Libs
import { ROUTER } from '@/constants';

export const authConfig = {
  callbacks: {
    authorized: ({ auth, request: { nextUrl } }) => {
      const isLoggedIn = !!auth?.user;
      const isPublicPage =
        nextUrl.pathname === ROUTER.LOGIN ||
        nextUrl.pathname === ROUTER.REGISTER;

      // If use has not logged in and access to Dashboard pages, navigate to Login Page
      if (!isLoggedIn && !isPublicPage) {
        return Response.redirect(new URL(ROUTER.LOGIN, nextUrl));
      }

      // If user has logged in and access to Login page, navigate to Dashboard page
      if (isLoggedIn && isPublicPage) {
        return Response.redirect(new URL(ROUTER.HOME, nextUrl));
      }

      return true;
    },
    jwt: async ({ user, token }) => {
      if (token) Object.assign(token, user);

      return token;
    },

    session: ({ session, token }) => {
      Object.assign(session.user, token);

      return session;
    },
  },
  session: {
    maxAge: 60 * 60 * 24 * 5,
  },
  trustHost: true,
  providers: [],
} satisfies NextAuthConfig;
