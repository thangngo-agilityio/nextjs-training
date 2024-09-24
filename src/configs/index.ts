// Libs
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcryptjs';

// APIs
import { getUsers } from '@/apis';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email' },
        password: { label: 'Password', type: 'password' },
      },

      authorize: async (credentials) => {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(8),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const { data: users } = await getUsers();

          const user = users.find((user) => {
            const { email: userEmail } = user || {};

            return userEmail === email;
          });

          if (!user) return null;

          const isPasswordsMatch = await bcrypt.compare(
            password,
            user.password,
          );

          if (isPasswordsMatch) return user;
        }

        return null;
      },
    }),
  ],
});
