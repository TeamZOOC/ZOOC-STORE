import { atom } from 'recoil';

import { OptionInfo } from '@/types/cart';

export const selectedOptionsState = atom<Array<OptionInfo[]>>({
  key: 'selectedOptionsState',
  default: [],
});
