import { setCookie } from 'cookies-next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { appleSignIn, kakaoSignIn } from '@/apis/auth';

import { useUserState } from '../../useUserState';

export const useLogin = async () => {
  const router = useRouter();
  const { data: session, update } = useSession();
  const { checkUserStatus } = useUserState();

  update();
  try {
    let response;
    console.log(session);
    switch (session?.provider) {
      case 'kakao':
        response = await kakaoSignIn(session.accessToken);
        break;
      case 'apple':
        if (!session.email || !session.sub) return;
        response = await appleSignIn(session.email, session.sub);
        break;
      default:
        return;
    }
    if (response) {
      setCookie('accessToken', response.data.accessToken);
      await checkUserStatus();
      const routePath = response.data.isExistedUser ? '/' : '/auth/signup';
      router.push(routePath);
    }
  } catch (error) {
    console.error('로그인 실패', error);
  }
};
