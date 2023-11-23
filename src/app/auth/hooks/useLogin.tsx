import { setCookie } from 'cookies-next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { appleSignIn, kakaoSignIn } from '@/apis/auth';

export const useLogin = async () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [routePath, setRoutePath] = useState('');

  useEffect(() => {
    if (routePath) {
      router.push(routePath);
    }
  }, [routePath, router]);

  if (!session?.accessToken) return;

  try {
    let response;

    switch (session.provider) {
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
      setRoutePath(response.data.isExistedUser ? '/' : '/auth/signup');
    }
  } catch (error) {
    console.error('로그인 실패', error);
  }
};
