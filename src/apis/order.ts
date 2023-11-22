import { shoppingMallAxios } from './axios';

export const getOrderList = async () => {
  try {
    const response = await shoppingMallAxios.get('/order/v1');
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getOrderDetail = async (id: string) => {
  try {
    const response = await shoppingMallAxios.get(`/order/${id}/v1`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
