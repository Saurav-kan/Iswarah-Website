import NextAuth, { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials
      ): Promise<User | null> {
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Missing credentials');
        }


        const res = await fetch(
          `${process.env.BACKEND_URL}/api/token/`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
          }
        );
        const data = await res.json();
        if (!res.ok || !data.access) {
          throw new Error(data.detail || 'Invalid username or password');
        }


        // 2) Cast to User so TS knows it fits your augmented fields
        const user: User = {
          name: credentials.username,
          accessToken: data.access,
          refreshToken: data.refresh,
          // (you can add any other default NextAuth User fields here if needed)
        } as User;


        return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 15 * 60, // 15 minutes
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = (user as any).accessToken;
        token.refreshToken = (user as any).refreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.error = token.error as string | undefined;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(authOptions);