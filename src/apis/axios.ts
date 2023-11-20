import axios, { AxiosInstance } from 'axios';

export const createAxios = (baseURL: string): AxiosInstance =>
  axios.create({
    baseURL,
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': baseURL,
      Authorization: `Bearer ${process.env.TEST_ACCESS_TOKEN}`,
    },
  });

export const shoppingMallAxios = createAxios(
  process.env.NEXT_PUBLIC_SHOPPINGMALL_BASE_URL!,
);

export const generalAxios = createAxios(
  process.env.NEXT_PUBLIC_GENERAL_BASE_URL!,
);
