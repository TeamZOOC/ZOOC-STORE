/* eslint-disable consistent-return */
import { ProductDetailResponse, ProductInfoResponse } from '@/types/product';
import { AxiosResponse } from 'axios';
import { shoppingMallAxios } from './axios';

export const getProduct = async (): Promise<
  ProductInfoResponse[] | undefined
> => {
  try {
    const response: AxiosResponse<ProductInfoResponse[]> =
      await shoppingMallAxios.get('/product/v1');
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getProductDetail = async (
  id: number,
): Promise<ProductDetailResponse | undefined> => {
  try {
    const response: AxiosResponse<ProductDetailResponse> =
      await shoppingMallAxios.get(`/product/${id}/v1`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
