import { shoppingMallAxios } from './axios';

export const getArticle = async () => {
  try {
    const response = await shoppingMallAxios.get('/article/v1');
    return response.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
