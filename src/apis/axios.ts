import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { getCookie, setCookie } from 'cookies-next';

/* eslint-disable no-param-reassign */

export const createAxios = (baseURL: string): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': baseURL,
    },
  });

  axiosInstance.interceptors.request.use((config) => {
    const accessToken = getCookie('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (tokenError: AxiosError) => {
      const originalRequest = tokenError.config!;
      const refreshTokenURL = `${process.env.NEXT_PUBLIC_GENERAL_BASE_URL}/user/refresh`;
      const refreshHeaders = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie('accessToken')}`,
        RefreshToken: getCookie('refreshToken'),
      };

      if (tokenError.response?.status === 401) {
        try {
          const response = await axios.post(
            refreshTokenURL,
            {},
            {
              headers: refreshHeaders,
            },
          );
          const { accessToken: newAccessToken } = response.data;
          setCookie('accessToken', newAccessToken);
          axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;

          return axiosInstance(originalRequest);
        } catch (refreshTokenError) {
          const refreshError = refreshTokenError as AxiosError;

          if (refreshError.response && refreshError.response.status === 406) {
            window.location.href = '/auth/login';
          }
          return Promise.reject(refreshTokenError);
        }
      }
      return Promise.reject(tokenError);
    },
  );

  return axiosInstance;
};

export const kakaoInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GENERAL_BASE_URL!,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_GENERAL_BASE_URL!,
  },
});

export const shoppingMallAxios = createAxios(
  process.env.NEXT_PUBLIC_SHOPPINGMALL_BASE_URL!,
);

export const generalAxios = createAxios(
  process.env.NEXT_PUBLIC_GENERAL_BASE_URL!,
);
