import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';

import { withdraw } from '@/apis/auth';
import { useModal } from '@/hooks/modal';
import { userState } from '@/recoil/user/atom';
import { useMutation } from '@tanstack/react-query';

export const useWithdraw = () => {
  const router = useRouter();
  const { closeModal } = useModal();
  const [, setUserStatus] = useRecoilState(userState);

  return useMutation(withdraw, {
    onSuccess: () => {
      deleteCookie('accessToken');
      setUserStatus('GUEST');
      closeModal('withdraw');
      router.push('/');
    },
    onError: (error) => {
      console.error('회원 탈퇴 실패', error);
    },
  });
};
