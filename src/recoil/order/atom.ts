import { atom } from 'recoil';

// 임시 interface 선언
export interface AddressInfo {
  address: string;
  addressDetail?: string;
  postcode: string;
}

export const addressState = atom<AddressInfo>({
  key: 'addressState',
  default: {
    address: '',
    addressDetail: undefined,
    postcode: '',
  },
});

export const buyerState = atom({
  key: 'buyerState',
  default: {
    buyerName: '',
    buyerPhone: '',
  },
});
