import { AxiosResponse } from 'axios';

/* eslint-disable consistent-return */
import { KakaoSignInResponse } from '@/types/auth';
import { generalAxios, kakaoInstance } from './axios';

export const kakaoSignIn = async (
  accessToken: string,
): Promise<KakaoSignInResponse | undefined> => {
  try {
    const response: AxiosResponse<KakaoSignInResponse> =
      await kakaoInstance.post(
        '/user/kakao/signin',
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const appleSignIn = async (email: string, sub: string) => {
  try {
    const response = await generalAxios.post('/user/apple/signin/web', {
      email,
      sub,
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const withdraw = async () => {
  try {
    await generalAxios.delete('/user');
  } catch (e) {
    console.error(e);
  }
};
