/* eslint-disable no-param-reassign */
import axios, { AxiosInstance } from 'axios';
import { getCookie } from 'cookies-next';

export const createAxios = (baseURL: string): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': baseURL,
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TEST_ACCESS_TOKEN}`,
    },
  });

  // axiosInstance.interceptors.request.use((config) => {
  //   const accessToken = getCookie('accessToken');
  //   if (accessToken) {
  //     config.headers.Authorization = `Bearer ${accessToken}`;
  //   }
  //   return config;
  // });

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
