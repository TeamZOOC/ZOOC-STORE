import { atom } from 'recoil';

export const categorySelectState = atom<string>({
  key: 'categorySelect',
  default: '전체',
});
