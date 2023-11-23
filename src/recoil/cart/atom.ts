import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { OptionInfo } from '../option/atom';

export interface cartInfo {
  id: number;
  image: string;
  name: string;
  price: number;
  sale: number | null;
  optionList: OptionInfo[];
}
const { persistAtom } = recoilPersist({
  key: 'cart',
  storage: localStorage,
});
export const cartState = atom<cartInfo[]>({
  key: 'cartState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
