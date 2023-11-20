import { PetDataInfo } from '@/types/pet';

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

export const registerPet = async (postPetInfo: PetDataInfo) => {
  try {
    const { data } = await generalAxios.post(`/pet`, postPetInfo);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
