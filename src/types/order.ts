export interface OrderInfo {
  id?: number;
  pieces: number;
  product: string;
  createdAt?: Date;
  price: number;
  image: string;
  optionCategory: string;
  deliveryState?: string;
  petName: string;
  optionDetail: string;
  optionAdditionalPrice: number;
}

export interface OrderListInfo {
  id: number;
  data: OrderInfo[];
}

export interface DeliveryInfo {
  receiverName: string;
  receiverPhone: string;
  address: string;
  request?: string;
}

export interface PaymentInfo {
  productPrice: number;
  deliveryFee: number;
  totalPrice: number;
}

export interface OrderDetailInfo {
  date: Date;
  products: OrderInfo[];
  delivery: DeliveryInfo;
  payment: PaymentInfo;
}

export interface OrderFormInfo {
  orderer: {
    name: string;
    phone: string;
  };
  receiver: {
    name: string;
    phone: string;
  };
  address: {
    address: string;
    postcode: string;
    detailAddress: string;
    request: string;
  };
  agreement: {
    checkOrder: boolean;
    privacyPolicy: boolean;
    thirdParty: boolean;
  };
}

export interface AddressInfo {
  address: string;
  postcode: string;
  detailAddress?: string;
  request?: string;
}

export interface OrderPostInfo {
  petId: number;
  orderer: {
    name: string;
    phone: string;
  };
  receiver: {
    name: string;
    phone: string;
  };
  address: AddressInfo;
  products: [
    {
      productId: number;
      optionIds: number[];
      pieces: number;
    },
  ];
}
