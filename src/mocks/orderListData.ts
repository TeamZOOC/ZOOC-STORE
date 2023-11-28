import { OrderListInfo } from '@/types/order';

export const ORDER_LIST: OrderListInfo[] = [
  {
    createdAt: '2023-11-21T07:13:49.981Z',
    products: [
      {
        name: '커스텀 반팔 티셔츠',
        image: 'testUrl',
        optionDetails: ['축구왕', '2x'],
        pieces: 1,
        price: 3000,
        sale: 0,
        id: '1',
        deliveryState: '접수중',
      },
    ],
  },
  {
    createdAt: '2023-11-20T07:13:49.981Z',
    products: [
      {
        name: '긴팔 티셔츠',
        image: 'testUrl',
        optionDetails: ['우비', '2x'],
        pieces: 2,
        price: 4000,
        sale: 0,
        id: '2',
        deliveryState: '배송완료',
      },
      {
        name: '긴팔 티셔츠',
        image: 'testUrl',
        optionDetails: ['해리포터', '2x'],
        pieces: 4,
        price: 4000,
        sale: 0,
        id: '2',
        deliveryState: '배송완료',
      },
    ],
  },
];
