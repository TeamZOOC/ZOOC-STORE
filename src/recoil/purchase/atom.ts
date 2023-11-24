import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { CartInfo } from '@/types/cart';

const { persistAtom } = recoilPersist({
  key: 'purchase',
  storage: localStorage,
});

export const purchaseState = atom<CartInfo[]>({
  key: 'purchaseAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
