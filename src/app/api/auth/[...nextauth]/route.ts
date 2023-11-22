/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
import { createPrivateKey } from 'crypto';
import { SignJWT } from 'jose';
// import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth/next';
import AppleProvider from 'next-auth/providers/apple';
import KakaoProvider from 'next-auth/providers/kakao';

const getAppleToken = async () => {
  if (
    !process.env.APPLE_TEAM_ID ||
    !process.env.APPLE_ID ||
    !process.env.APPLE_KEY_ID ||
    !process.env.APPLE_PRIVATE_KEY
  ) {
    throw new Error('Apple 환경변수가 존재하지 않습니다.');
  }

  const applePrivateKey = `-----BEGIN PRIVATE KEY-----\n${process.env.APPLE_PRIVATE_KEY}\n-----END PRIVATE KEY-----\n`;

  const appleToken = await new SignJWT({})
    .setAudience('https://appleid.apple.com')
    .setIssuer(process.env.APPLE_TEAM_ID)
    .setIssuedAt(new Date().getTime() / 1000)
    .setExpirationTime(new Date().getTime() / 1000 + 3600 * 2)
    .setSubject(process.env.APPLE_ID)
    .setProtectedHeader({
      alg: 'ES256',
      kid: process.env.APPLE_KEY_ID,
    })
    .sign(createPrivateKey(applePrivateKey));

  return appleToken;
};

const initAuthOptions = async () => {
  const appleToken = await getAppleToken();

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
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      KakaoProvider({
        clientId: process.env.KAKAO_CLIENT_ID!,
        clientSecret: process.env.KAKAO_CLIENT_SECRET!,
      }),
      AppleProvider({
        clientId: process.env.APPLE_ID!,
        clientSecret: appleToken,
        // checks: 'pkce' as 'pkce',
        // wellKnown: 'https://appleid.apple.com/.well-known/openid-configuration',
        // token: {
        //   url: `https://appleid.apple.com/auth/token`,
        // },
        // authorization: {
        //   url: 'https://appleid.apple.com/auth/authorize',
        //   params: {
        //     scope: '',
        //     response_type: 'code',
        //     response_mode: 'query',
        //     state: crypto.randomUUID(),
        //   },
        // },
        // client: {
        //   token_endpoint_auth_method: 'client_secret_post',
        // },
      }),
    ],
    callbacks: {
      async jwt({ token, account }: any) {
        if (account) {
          token.accessToken = account.access_token;
          token.provider = account.provider;
        }
        return token;
      },
      async session({ session, token }: any) {
        session.idToken = token.id_token;
        session.accessToken = token.accessToken;
        session.provider = token.provider;

        return session;
      },
    },
  };
};
const handler = async (req: any, res: any) => {
  const authOptions = await initAuthOptions();
  return NextAuth(req, res, authOptions);
};

export { handler as GET, handler as POST };
