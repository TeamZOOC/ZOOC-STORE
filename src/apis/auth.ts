/* eslint-disable consistent-return */
import { KakaoSignInResponse } from '@/types/auth';
import { AxiosResponse } from 'axios';
import { generalAxios } from './axios';

export const kakaoSignIn = async (
  accessToken: string,
): Promise<KakaoSignInResponse | undefined> => {
  try {
    const response: AxiosResponse<KakaoSignInResponse> =
      await generalAxios.post(
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
