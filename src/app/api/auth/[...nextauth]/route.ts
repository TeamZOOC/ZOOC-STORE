/* eslint-disable no-return-await */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
import { createPrivateKey } from 'crypto';
import { JWTPayload, SignJWT } from 'jose';
import jwt from 'jsonwebtoken';
import { SessionStrategy } from 'next-auth';
// import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth/next';
import AppleProvider from 'next-auth/providers/apple';
import KakaoProvider from 'next-auth/providers/kakao';

const applePrivateKey = `-----BEGIN PRIVATE KEY-----\n${process.env.APPLE_PRIVATE_KEY}\n-----END PRIVATE KEY-----\n`;

const getAppleToken = async () => {
  if (
    !process.env.APPLE_TEAM_ID ||
    !process.env.APPLE_ID ||
    !process.env.APPLE_KEY_ID ||
    !process.env.APPLE_PRIVATE_KEY
  ) {
    throw new Error('Apple 환경변수가 존재하지 않습니다.');
  }

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
    session: {
      strategy: 'jwt' as SessionStrategy,
      maxAge: 60 * 60 * 24,
      updateAge: 60 * 60 * 4,
    },
    jwt: {
      maxAge: 60 * 60 * 24,
      async encode({ secret, token, maxAge }: any) {
        return await jwt.sign(token, secret, { algorithm: 'ES256' });
      },
      async decode({ secret, token, maxAge }: any) {
        return (await jwt.verify(token, secret, {
          algorithms: ['RS256'],
        })) as JWTPayload;
      },
    },
    secret: applePrivateKey,
    providers: [
      KakaoProvider({
        clientId: process.env.KAKAO_CLIENT_ID!,
        clientSecret: process.env.KAKAO_CLIENT_SECRET!,
      }),
      AppleProvider({
        clientId: process.env.APPLE_ID!,
        clientSecret: appleToken,
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
      // async jwt({ token, account }: any) {
      //   if (account) {
      //     token.accessToken = account.access_token;
      //     token.provider = account.provider;
      //   }
      //   return token;
      // },
      async jwt({ token, account, user }: any) {
        if (account) {
          token.accessToken = account.access_token;
          token.provider = account.provider;
        }
        console.log('JWT function Invoked');
        console.log('USER in JWT:', user);
        console.log('token JWT:', token);
        if (user && user.id) {
          token['https://hasura.io/jwt/claims'] = {
            'x-hasura-allowed-roles': ['commercial', 'admin'],
            'x-hasura-default-role': 'admin',
            'x-hasura-user-id': user.id.toString(),
          };
        }
        return token;
      },

      async session({ session, token }: any) {
        session.id_token = token.id_token;
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
