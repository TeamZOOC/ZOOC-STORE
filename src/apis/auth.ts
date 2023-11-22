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

export const appleSignIn = async (accessToken: string) => {
  try {
    const response = await generalAxios.post('/user/apple/signin', {
      identityTokenString: accessToken,
    });
    console.log(response);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
