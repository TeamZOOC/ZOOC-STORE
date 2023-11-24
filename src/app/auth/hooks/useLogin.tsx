import { setCookie } from 'cookies-next';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { appleSignIn, kakaoSignIn } from '@/apis/auth';
import { useEffect, useState } from 'react';

export const useLogin = async () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [readyToLogin, setReadyToLogin] = useState(false);

  useEffect(() => {
    const refreshSession = async () => {
      if (status === 'authenticated') {
        await getSession();
        setReadyToLogin(true);
      }
    };

    refreshSession();
  }, [status]);

  console.log(readyToLogin);
  if (session) {
    console.log(session.provider);
  }

  useEffect(() => {
    if (readyToLogin) {
      const performLogin = async () => {
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
            setCookie('accessToken', response.data.accessToken);
            const routePath = response.data.isExistedUser
              ? '/'
              : '/auth/signup';
            router.push(routePath);
          }
        } catch (error) {
          console.error('로그인 실패', error);
        }
      };

      performLogin();
    }
  }, [readyToLogin, session, router]);
};
