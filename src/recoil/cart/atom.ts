import { atom } from 'recoil';

interface cartInfo {
  id: number;
  image: string;
  name: string;
  price: number;
  sale: number | null;
}
export const cartState = atom<cartInfo[]>({
  key: 'cartState',
  default: [],
});
