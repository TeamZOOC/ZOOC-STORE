import axios from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';
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

  return useMutation(withdraw, {
    onSuccess: async () => {
      setUserStatus('GUEST');
      setPetId(undefined);
      deleteCookie('accessToken');

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

      closeModal('withdraw');
      router.push('/');
    },
    onError: (error) => {
      console.error('회원 탈퇴 실패', error);
    },
  });
};
