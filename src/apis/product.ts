/* eslint-disable consistent-return */
import { shoppingMallAxios } from './axios';

const CATEGORY_MAPPING: Record<string, number> = {
  all: 0,
  season: 1,
  outfit: 2,
  case: 3,
  acc: 4,
};

export const getProduct = async (categoryName: string) => {
  const categoryId =
    categoryName === 'all'
      ? ''
      : `?categoryId=${CATEGORY_MAPPING[categoryName]}`;

  try {
    const response = await shoppingMallAxios.get(`/product/v1${categoryId}`);
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
