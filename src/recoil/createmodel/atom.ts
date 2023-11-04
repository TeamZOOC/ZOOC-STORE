import { atom } from 'recoil';

export const uploadImagesState = atom<File[]>({
  key: 'uploadImages',
  default: [],
});

export const imageThumbnailsState = atom<string[]>({
  key: 'imageThumbnails',
  default: [],
});
