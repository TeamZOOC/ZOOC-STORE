import { atom } from 'recoil';
import { OptionInfo } from '../option/atom';

interface cartInfo {
  id: number;
  image: string;
  name: string;
  price: number;
  sale: number | null;
  optionList: Array<OptionInfo[]>;
}
export const cartState = atom<cartInfo[]>({
  key: 'cartState',
  default: [],
});
