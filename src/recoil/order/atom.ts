import { atom } from 'recoil';

import { AddressInfo } from '@/types/order';

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
