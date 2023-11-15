/* eslint-disable consistent-return */
import client from './axios';

export const kakaoSignIn = async () => {
  try {
    const response = await client.get('/user/kakao/signin');
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
