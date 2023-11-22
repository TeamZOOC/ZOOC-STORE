import { OrderListInfo } from '@/types/order';

export const ORDER_LIST: OrderListInfo[] = [
  {
    createdAt: '2023-11-21T07:13:49.981Z',
    data: [
      {
        product: '커스텀 반팔 티셔츠',
        image: 'testUrl',
        optionDetail: ['축구왕', '2x'],
        pieces: 1,
        price: 3000,
        id: 'string',
        deliveryState: '접수중',
      },
    ],
  },
  {
    createdAt: '2023-11-20T07:13:49.981Z',
    data: [
      {
        product: '긴팔 티셔츠',
        image: 'testUrl',
        optionDetail: ['우비', '2x'],
        pieces: 2,
        price: 4000,
        id: 'string',
        deliveryState: '배송완료',
      },
      {
        product: '긴팔 티셔츠',
        image: 'testUrl',
        optionDetail: ['해리포터', '2x'],
        pieces: 4,
        price: 4000,
        id: 'string',
        deliveryState: '배송완료',
      },
    ],
  },
];
