export interface OrderInfo {
  product: string;
  image: string;
  optionDetail: string[];
  pieces: number;
  price: number;
  id: string;
  deliveryState?: string;
}

export interface OrderListInfo {
  createdAt: string;
  data: OrderInfo[];
}

export interface DeliveryInfo {
  receiverName: string;
  receiverPhone: string;
  postcode: string;
  address: string;
  request?: string;
}
export interface ProductInfo {
  product: string;
  image: string;
  pieces: number;
  optionDetail: string[];
  price: number;
  deliveryState: string;
}

export interface PaymentInfo {
  totalProductPrice: number;
  deliveryFee: number;
}

export interface OrderDetailInfo {
  createdAt: Date | string;
  address: DeliveryInfo;
  products: ProductInfo[];
  payment: PaymentInfo;
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
