import { setCookie } from 'cookies-next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';

import { kakaoSignIn } from '@/apis/auth';
import { userState } from '@/recoil/user/atom';

export async function useKakaoLogin() {
  const router = useRouter();
  const { data: session } = useSession();
  const [, setUserStatus] = useRecoilState(userState);

  if (session?.accessToken) {
    if (session.provider === 'kakao') {
      const response = await kakaoSignIn(session.accessToken);
      if (response) {
        setCookie('accessToken', response.data.accessToken);
        if (response.data.isExistedUser) {
          setUserStatus('MEMBER');
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
