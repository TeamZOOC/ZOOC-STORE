import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

import { withdraw } from '@/apis/auth';
import { useModal } from '@/hooks/modal';
import { useMutation } from '@tanstack/react-query';

export const useWithdraw = () => {
  const router = useRouter();
  const { closeModal } = useModal();

  return useMutation(withdraw, {
    onSuccess: () => {
      deleteCookie('accessToken');
      closeModal('withdraw');
      router.push('/');
    },
    onError: (error) => {
      console.error('회원 탈퇴 실패', error);
    },
  });
};
