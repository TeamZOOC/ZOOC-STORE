import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { CartInfo } from '@/types/cart';
import { PaymentInfo } from '@/types/order';

const { persistAtom } = recoilPersist({
  key: 'purchase',
  storage: localStorage,
});

export const purchaseState = atom<CartInfo[]>({
  key: 'purchaseAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const purchasePriceState = atom<PaymentInfo>({
  key: 'purchasePriceAtom',
  default: {
    totalProductPrice: 0,
    deliveryFee: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
