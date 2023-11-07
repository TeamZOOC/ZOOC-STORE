export interface OrderInfo {
  id?: number;
  pieces: number;
  product: string;
  createdAt?: Date;
  price: number;
  image: string;
  optionCategory: string;
  deliveryState: string;
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
