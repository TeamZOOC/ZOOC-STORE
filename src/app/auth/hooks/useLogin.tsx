import { setCookie } from 'cookies-next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { appleSignIn, kakaoSignIn } from '@/apis/auth';

export const useLogin = async () => {
  const router = useRouter();
  const { data: session } = useSession();

  if (session?.accessToken) {
    if (session.provider === 'kakao') {
      const response = await kakaoSignIn(session.accessToken);

      if (response) {
        setCookie('accessToken', response.data.accessToken);
        if (response.data.isExistedUser) {
          router.push('/');
        } else {
          router.push('/auth/signup');
        }
      }
    }

    if (session.provider === 'apple') {
      if (!session.email || !session.sub) return;
      const response = await appleSignIn(session.email, session.sub);

      if (response) {
        setCookie('accessToken', response.data.accessToken);
        if (response.data.isExistedUser) {
          router.push('/');
        } else {
          router.push('/auth/signup');
        }
      }
    }
  }
};
