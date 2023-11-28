import { OrderDetailInfo } from '@/types/order';

export const ORDER_DETAIL: OrderDetailInfo = {
  createdAt: '2023-11-22T08:24:47.527Z',
  address: {
    receiverName: 'string',
    receiverPhone: 'string',
    postcode: 'string',
    address: 'string',
    request: 'string',
  },
  products: [
    {
      name: 'string',
      image: 'string',
      pieces: 2,
      sale: 0,
      optionDetails: ['string'],
      price: 10000,
      deliveryState: 'string',
    },
  ],
  payment: {
    totalProductPrice: 20000,
    deliveryFee: 4000,
  },
};
