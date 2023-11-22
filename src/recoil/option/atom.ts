import { atom } from 'recoil';

export interface OptionInfo {
  id: number;
  name: string;
  optionIndex: number;
  quantity: number;
}

export const selectedOptionsState = atom<Array<OptionInfo[]>>({
  key: 'selectedOptionsState',
  default: [],
});
