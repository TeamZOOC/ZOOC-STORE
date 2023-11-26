import axios from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';
import { createPrivateKey } from 'crypto';
import { SignJWT } from 'jose';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';

import { withdraw } from '@/apis/auth';
import { useModal } from '@/hooks/modal';
import { petIdState } from '@/recoil/pet/atom';
import { userState } from '@/recoil/user/atom';
import { useMutation } from '@tanstack/react-query';

export const useWithdraw = () => {
  const router = useRouter();
  const { closeModal } = useModal();
  const [, setUserStatus] = useRecoilState(userState);
  const [, setPetId] = useRecoilState(petIdState);
  const kakaoAccessToken = getCookie('kakaoAccessToken');
  const appleAccessToken = getCookie('appleAccessToken');

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

  return useMutation(withdraw, {
    onSuccess: async () => {
      deleteCookie('accessToken');
      signOut({ callbackUrl: 'https://www.fitapat.com/' });
      setUserStatus('GUEST');
      setPetId(undefined);

      if (kakaoAccessToken) {
        await axios({
          method: 'POST',
          url: 'https://kapi.kakao.com/v1/user/unlink',
          headers: {
            Authorization: `Bearer ${kakaoAccessToken}}`,
          },
        });
        deleteCookie('kakaoAccessToken');
      }

      if (appleAccessToken) {
        const appleSecret = await getAppleToken();
        await axios.post(
          'https://appleid.apple.com/auth/revoke',
          new URLSearchParams({
            client_id: process.env.APPLE_ID!,
            client_secret: appleSecret,
            token: appleAccessToken,
            token_type_hint: 'access_token',
          }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        );
        deleteCookie('appleAccessToken');
      }

      closeModal('withdraw');
      router.push('/');
    },
    onError: (error) => {
      console.error('회원 탈퇴 실패', error);
    },
  });
};
