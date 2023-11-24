import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { PetDataInfo } from '@/types/pet';

const { persistAtom } = recoilPersist();

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

export const petIdState = atom<number>({
  key: 'petIdAtom',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
