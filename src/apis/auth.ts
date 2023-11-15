/* eslint-disable consistent-return */
import client from './axios';

export const kakaoSignIn = async (accessToken: string) => {
  try {
    const response = await client.get('/user/kakao/signin', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
