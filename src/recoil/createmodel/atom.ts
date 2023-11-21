import { atom } from 'recoil';

export const uploadImagesState = atom<File[]>({
  key: 'uploadImages',
  default: [],
});
