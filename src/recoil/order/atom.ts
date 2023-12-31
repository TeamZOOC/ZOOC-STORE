import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { AddressInfo } from '@/types/order';

const { persistAtom } = recoilPersist();

export const addressState = atom<AddressInfo>({
  key: 'addressState',
  default: {
    address: '',
    postcode: '',
    detailAddress: undefined,
  },
});

export const buyerState = atom({
  key: 'buyerState',
  default: {
    buyerName: '',
    buyerPhone: '',
  },
});

export const returnPathState = atom<string | undefined>({
  key: 'returnPathState',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

type OrderPathType = 'cart' | 'buy' | undefined;

export const orderPathState = atom<OrderPathType>({
  key: 'orderPathState',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

type RegisterPathType = string | undefined;

export const registerPathState = atom<RegisterPathType>({
  key: 'registerPathState',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
