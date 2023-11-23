import { OrderPostInfo } from '@/types/order';

import { shoppingMallAxios } from './axios';

export const getOrderList = async () => {
  try {
    const response = await shoppingMallAxios.get('/order/v1');
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getOrderDetail = async (id: string) => {
  try {
    const response = await shoppingMallAxios.get(`/order/${id}/v1`);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const postOrder = async (orderData: OrderPostInfo) => {
  try {
    const response = await shoppingMallAxios.post(`/order/v1`, orderData);
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
