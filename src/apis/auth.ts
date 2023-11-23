import { AxiosResponse } from 'axios';

/* eslint-disable consistent-return */
import { KakaoSignInResponse } from '@/types/auth';

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

export const withdraw = async () => {
  try {
    const response = await generalAxios.delete('/user');
    console.log(response);
  } catch (e) {
    console.error(e);
  }
};
