import { setCookie } from 'cookies-next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { kakaoSignIn } from '@/apis/auth';
import { useUserState } from '@/app/useUserState';

export async function useKakaoLogin() {
  const router = useRouter();
  const { data: session } = useSession();
  const { checkUserStatus } = useUserState();

  if (session?.accessToken) {
    console.log(session.accessToken);
    if (session.provider === 'kakao') {
      const response = await kakaoSignIn(session.accessToken);
      if (response) {
        setCookie('accessToken', response.data.accessToken);
        await checkUserStatus();
        if (response.data.isExistedUser) {
          router.push('/');
        } else {
          router.push('/auth/signup');
        }
      }
    } else {
      // session.provider === "apple" 일 때
    }
  }
}
