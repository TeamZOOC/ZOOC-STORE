import { OrderDetailInfo } from '@/types/order';

export const ORDER_DETAIL: OrderDetailInfo = {
  date: new Date('2023-09-21 05:52:21.877'),
  products: [
    {
      image:
        'https://cdn-image02.casetify.com/usr/27391/11607391/~v132/11534483x2_iphone11_16000203.png.1000x1000-w.m80.jpg',
      petName: '은실',
      product: '핸드폰 케이스',
      price: 40000,
      optionAdditionalPrice: 0,
      pieces: 1,
      optionCategory: '기종',
      optionDetail: 'Iphone 12',
      deliveryState: '배송완료',
    },
    {
      image:
        'https://cdn-image02.casetify.com/usr/27391/11607391/~v132/11534483x2_iphone11_16000203.png.1000x1000-w.m80.jpg',
      petName: '은실',
      product: '핸드폰 케이스',
      price: 40000,
      optionAdditionalPrice: 0,
      pieces: 2,
      optionCategory: '기종',
      optionDetail: 'Iphone 10',
      deliveryState: '접수진행',
    },
  ],
  delivery: {
    receiverName: 'ZZ',
    receiverPhone: '010',
    address: 'ttsdfjsldfkwje.dfjlsdjㅇ라ㅣ너이ㅏ렂디ㅏ거지ㅓㅏㄷㄱ ',
    request: 'dfjlsdjㅇ라ㅣ너이ㅏ렂디ㅏ거지ㅓㅏㄷㄱ',
  },
  payment: {
    productPrice: 120000,
    deliveryFee: 9000,
    totalPrice: 129000,
  },
};
