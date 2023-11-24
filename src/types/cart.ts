export interface OptionInfo {
  id: number;
  name: string;
  optionIndex: number;
  quantity: number;
}

export interface CartInfo {
  id: number;
  image: string;
  name: string;
  price: number;
  sale: number | null;
  optionList: OptionInfo[];
}
