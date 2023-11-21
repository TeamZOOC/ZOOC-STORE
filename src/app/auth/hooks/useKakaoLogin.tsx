// import { setCookie } from 'cookies-next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

// import { kakaoSignIn } from '@/apis/auth';

export async function useKakaoLogin() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session?.accessToken) {
    console.log('session', session);
    if (session.provider === 'kakao') {
      console.log('카카오 로그인', session.accessToken);
      // const response = await kakaoSignIn(session.accessToken);
      // if (response) {
      //   setCookie('accessToken', response.data.accessToken);
      //   if (response.data.isExistedUser) {
      //     router.push('/');
      //   } else {
      //     router.push('/auth/signup');
      //   }
      // }
    } else if (session.provider === 'apple') {
      // session.provider === "apple" 일 때
      console.log('애플 로그인', session.accessToken);
      router.push('/auth/signup');
    }
  }
}
