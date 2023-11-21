export interface OrderInfo {
  product: string;
  image: string;
  options: string[];
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
