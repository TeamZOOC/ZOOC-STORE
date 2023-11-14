import { StaticImageData } from 'next/image';

export interface cartInfo {
  id: number;
  imgSrc: StaticImageData;
  imgAlt: string;
  productTitle: string;
  productSalePercent?: string;
  productPrice: string;
  option: string[];
  quantity: number;
}
