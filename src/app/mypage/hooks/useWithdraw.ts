import { withdraw } from '@/apis/auth';
import { useMutation } from '@tanstack/react-query';

export const useWithdraw = () =>
  useMutation(withdraw, {
    onSuccess: () => {
      console.log('회원 탈퇴 성공');
    },
    onError: (error) => {
      console.error('회원 탈퇴 실패', error);
    },
  });
