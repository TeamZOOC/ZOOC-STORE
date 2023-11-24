import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { PetDataInfo } from '@/types/pet';

const { persistAtom } = recoilPersist();

export const petIdState = atom<number>({
  key: 'petIdState',
  effects_UNSTABLE: [persistAtom],
});

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
