import { selector } from 'recoil';
import { modalAtom } from './atom';

export const modalSelector = selector({
  key: 'modalSelector',
  get: ({ get }) => get(modalAtom) + 10,
});
