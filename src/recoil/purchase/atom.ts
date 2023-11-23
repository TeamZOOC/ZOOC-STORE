import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { cartInfo } from '../cart/atom';

const { persistAtom } = recoilPersist({
  key: 'purchase',
  storage: localStorage,
});

export const purchaseState = atom<cartInfo[]>({
  key: 'purchaseAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
