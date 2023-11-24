import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { CartInfo } from '@/types/cart';

const { persistAtom } = recoilPersist({
  key: 'cart',
  storage: localStorage,
});

export const cartState = atom<CartInfo[]>({
  key: 'cartState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
