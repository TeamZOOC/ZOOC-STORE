import { generalAxios } from './axios';

export const getPet = async () => {
  try {
    const { data } = await generalAxios.get(`/pet`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
