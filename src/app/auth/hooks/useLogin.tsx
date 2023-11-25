import { setCookie } from 'cookies-next';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { appleSignIn, kakaoSignIn } from '@/apis/auth';
import { useUserState } from '@/app/useUserState';
import { loginLoadingState } from '@/recoil/user/atom';

export const useLogin = async () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [readyToLogin, setReadyToLogin] = useState(false);
  const { checkUserStatus } = useUserState();
  const [isLoginLoading, setIsLoginLoading] = useRecoilState(loginLoadingState);

  useEffect(() => {
    const refreshSession = async () => {
      if (status === 'authenticated') {
        await getSession();
        setReadyToLogin(true);
      }
    };

    refreshSession();
  }, [status]);

  useEffect(() => {
    if (readyToLogin) {
      const performLogin = async () => {
        setIsLoginLoading(true);
        try {
          let response;
          switch (session?.provider) {
            case 'kakao':
              response = await kakaoSignIn(session.accessToken);
              setCookie('kakaoAccessToken', session.accessToken);
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
            const routePath = response.data.isExistedUser
              ? '/'
              : '/auth/signup';
            router.push(routePath);
          }
        } catch (error) {
          setIsLoginLoading(false);
          console.error('로그인 실패', error);
        }
      };

      performLogin();
    }
  }, [readyToLogin, session, router]);

  return isLoginLoading;
};
