import { createPrivateKey } from 'crypto';
import { SignJWT } from 'jose';

export const getAppleSecret = async () => {
  if (
    !process.env.APPLE_TEAM_ID ||
    !process.env.APPLE_ID ||
    !process.env.APPLE_KEY_ID ||
    !process.env.APPLE_PRIVATE_KEY
  ) {
    throw new Error('Apple 환경변수가 존재하지 않습니다.');
  }

  const applePrivateKey = `-----BEGIN PRIVATE KEY-----\n${process.env.APPLE_PRIVATE_KEY}\n-----END PRIVATE KEY-----\n`;
  const appleSecret = await new SignJWT({})
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

  return appleSecret;
};
