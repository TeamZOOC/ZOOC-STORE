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
      product: 'string',
      image: 'string',
      pieces: 0,
      optionDetail: ['string'],
      price: 0,
      deliveryState: 'string',
    },
  ],
  payment: {
    totalProductPrice: 0,
    deliveryFee: 0,
  },
};
