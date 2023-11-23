import { atom } from 'recoil';

import { PetDataInfo } from '@/types/pet';

export const uploadImagesState = atom<File[]>({
  key: 'uploadImages',
  default: [],
});

export const petRegisterState = atom<PetDataInfo>({
  key: 'petRegisterState',
  default: {
    name: '',
    breed: '',
  },
});
