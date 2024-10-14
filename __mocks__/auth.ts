/* https://github.com/nextauthjs/next-auth/discussions/9880 
   https://github.com/nextauthjs/next-auth/issues/6822
*/

const authMock = {
  auth: {
    session: {
      jwt: true,
    },
    jwt: {
      secret: process.env.AUTH_SECRET,
    },
  },
  signIn: jest.fn(),
  signOut: jest.fn(),
  handlers: {
    GET: jest.fn(),
    POST: jest.fn(),
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = authMock;
