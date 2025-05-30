import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';


declare module 'next-auth' {
    interface Session extends DefaultSession {
        // add custom properties to Session
        accessToken?: string;
        error?: string;
  }

    interface User extends DefaultUser {
        accessToken: string;
        refreshToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    // these are the properties we stash in the token callback
    accessToken?: string;
    refreshToken?: string;
    error?: string;
  }
}
