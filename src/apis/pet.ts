import { PetDataInfo, PetEditInfo } from '@/types/pet';

import { generalAxios } from './axios';

export const getPet = async () => {
  try {
    const { data } = await generalAxios.get(`/pet`);
    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const registerPet = async (postPetInfo: PetDataInfo) => {
  try {
    const { data } = await generalAxios.post(`/pet`, postPetInfo);
    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editPet = async (petId: number, editPetInfo: PetEditInfo) => {
  try {
    const formData = new FormData();
    if (editPetInfo.file) {
      formData.append('file', editPetInfo.file);
    }
    if (editPetInfo.nickName) {
      formData.append('nickName', editPetInfo.nickName);
    }
    if (editPetInfo.breed) {
      formData.append('breed', editPetInfo.breed);
    }
    const { data } = await generalAxios.patch(`/pet/${petId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createDataset = async (petId: number) => {
  try {
    const { data } = await generalAxios.post(`/ai/dataset`, { petId });
    return data.data.datasetId;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const uploadDatasetImages = async (datasetId: number, files: File[]) => {
  try {
    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));
    const { data } = await generalAxios.patch(
      `/ai/images/${datasetId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
