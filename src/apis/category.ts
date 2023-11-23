import { shoppingMallAxios } from './axios';

export const getCategories = async () => {
  try {
    const response = await shoppingMallAxios.get('/category/v1');
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
