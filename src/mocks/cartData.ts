import { cartInfo } from '@/types/cart';
import { ImageProduct } from '../../public/images';

export const CART_LIST: cartInfo[] = [
  {
    id: 1,
    imgSrc: ImageProduct,
    imgAlt: '상품 이미지',
    productTitle: '2023 캘린더',
    productSalePercent: '32%',
    productPrice: '23,000',
    option: ['축구왕', '2X', '앞면'],
    quantity: 1,
  },
  {
    id: 2,
    imgSrc: ImageProduct,
    imgAlt: '상품 이미지',
    productTitle: '웅냥냥',
    productPrice: '23,000',
    option: ['경찰관', '갤럭시 노트 20 울트라'],
    quantity: 2,
  },
  {
    id: 3,
    imgSrc: ImageProduct,
    imgAlt: '상품 이미지',
    productTitle: '2023 캘린더',
    productSalePercent: '32%',
    productPrice: '23,000',
    option: ['경찰관', '갤럭시 노트 20 울트라 울트라 울트라 울트라'],
    quantity: 3,
  },
];
