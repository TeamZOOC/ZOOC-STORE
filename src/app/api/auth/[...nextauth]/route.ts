/* eslint-disable no-param-reassign */

import NextAuth from 'next-auth/next';
import AppleProvider from 'next-auth/providers/apple';
import KakaoProvider from 'next-auth/providers/kakao';

import { getAppleSecret } from '@/utils/getAppleSecret';

const initAuthOptions = async () => {
  const appleSecret = await getAppleSecret();

  return {
    cookies: {
      pkceCodeVerifier: {
        name: 'next-auth.pkce.code_verifier',
        options: {
          httpOnly: true,
          sameSite: 'none' as 'none',
          path: '/',
          secure: true,
        },
      },
    },
    site: 'https://fitapet-test.shop' || 'http://localhost:3000',
    providers: [
      KakaoProvider({
        clientId: process.env.KAKAO_CLIENT_ID!,
        clientSecret: process.env.KAKAO_CLIENT_SECRET!,
      }),
      AppleProvider({
        clientId: process.env.APPLE_ID!,
        clientSecret: appleSecret,
        checks: ['pkce', 'state'],
        wellKnown: 'https://appleid.apple.com/.well-known/openid-configuration',
        token: {
          url: `https://appleid.apple.com/auth/token`,
        },
        authorization: {
          url: 'https://appleid.apple.com/auth/authorize',
          params: {
            scope: '',
            response_type: 'code',
            response_mode: 'query',
            state: crypto.randomUUID(),
          },
        },
        client: {
          token_endpoint_auth_method: 'client_secret_post',
        },
      }),
    ],

    callbacks: {
      async jwt({ token, account }: any) {
        if (account) {
          token.provider = account.provider;
          token.accessToken = account.access_token;
        }
        return token;
      },
      async session({ session, token }: any) {
        session.provider = token.provider;
        session.accessToken = token.accessToken;
        if (token.sub && token.email) {
          session.sub = token.sub;
          session.email = token.email;
        }
        return session;
      },
    },
  };
};
const handler = async (req: any, res: any) => {
  const authOptions: any = await initAuthOptions();
  return NextAuth(req, res, authOptions);
};

export { handler as GET, handler as POST };
