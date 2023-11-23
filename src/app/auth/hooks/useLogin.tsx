import { setCookie } from 'cookies-next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { appleSignIn, kakaoSignIn } from '@/apis/auth';

export const useLogin = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleLogin = async () => {
    console.log(true);
    try {
      let response;

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
        console.log(response);
        setCookie('accessToken', response.data.accessToken);
        const routePath = response.data.isExistedUser ? '/' : '/auth/signup';
        console.log(routePath);
        router.push(routePath);
      }
    } catch (error) {
      console.error('로그인 실패', error);
    }
  };

  return { handleLogin };
};
