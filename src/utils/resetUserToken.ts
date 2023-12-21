import { deleteCookie } from 'cookies-next';

export const resetUserToken = () => {
  deleteCookie('kakaoAccessToken');
  deleteCookie('appleAccessToken');
  deleteCookie('accessToken');
  deleteCookie('refreshToken');
};
