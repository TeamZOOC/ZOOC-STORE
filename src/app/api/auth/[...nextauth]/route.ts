/* eslint-disable no-param-reassign */
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import KakaoProvider from 'next-auth/providers/kakao';

const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async jwt({ token, account }: any) {
      if (account) {
        token.accessToken = account.access_token;
        if (account.provider === 'kakao') {
          token.provider = 'kakao';
        } else if (account.provider === 'apple') {
          token.provider = 'google';
        }
      }
      return token;
    },
    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      session.provider = token.provider;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
