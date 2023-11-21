/* eslint-disable consistent-return */
import { shoppingMallAxios } from './axios';

export const getProduct = async () => {
  try {
    const response = await shoppingMallAxios.get('/product/v1');
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getProductDetail = async (id: number) => {
  try {
    const response = await shoppingMallAxios.get(`/product/${id}/v1`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
