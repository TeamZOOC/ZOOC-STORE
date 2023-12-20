/* eslint-disable no-param-reassign */
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { getCookie, setCookie } from 'cookies-next';

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
    async (error: AxiosError) => {
      const originalRequest = error.config;
      if (error.response?.status === 401) {
        const refreshTokenURL = `${process.env.NEXT_PUBLIC_GENERAL_BASE_URL}/user/refresh`;
        try {
          const refreshToken = getCookie('refreshToken');
          const response = await axios.post(
            refreshTokenURL,
            {},
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getCookie('accessToken')}`,
                'Refresh-Token': refreshToken,
              },
            },
          );
          const { accessToken: newAccessToken } = response.data;
          setCookie('accessToken', newAccessToken);
          axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
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
