import axios from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';

import { withdraw } from '@/apis/auth';
import { useModal } from '@/hooks/modal';
import { petIdState } from '@/recoil/pet/atom';
import { userState } from '@/recoil/user/atom';
import { getAppleSecret } from '@/utils/getAppleSecret';
import { useMutation } from '@tanstack/react-query';

export const useWithdraw = () => {
  const router = useRouter();
  const { closeModal } = useModal();
  const [, setUserStatus] = useRecoilState(userState);
  const [, setPetId] = useRecoilState(petIdState);
  const kakaoAccessToken = getCookie('kakaoAccessToken');
  const appleAccessToken = getCookie('appleAccessToken');
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
        const appleSecret = await getAppleSecret();
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
