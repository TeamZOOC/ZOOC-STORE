import { OptionCategoriesInfo } from '@/types/product';
import { atom } from 'recoil';

export const productOptionState = atom<OptionCategoriesInfo[]>({
  key: 'productOptionState',
  default: [],
});
