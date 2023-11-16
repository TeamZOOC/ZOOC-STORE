import { kakaoSignIn } from '@/apis/auth';
import { setCookie } from 'cookies-next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export async function useLogin() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session?.accessToken) {
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
}
