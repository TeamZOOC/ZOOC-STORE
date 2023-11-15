import { kakaoSignIn } from '@/apis/auth';
import { useSession } from 'next-auth/react';

export async function useLogin() {
  const { data: session } = useSession();

  if (session) {
    const response = await kakaoSignIn(session.accessToken);
    console.log(response);
  }
}
