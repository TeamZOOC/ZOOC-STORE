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

export interface OrderProductInfo {
  image: string;
  petName: string;
  product: string;
  price: number;
  optionAdditionalPrice: number;
  pieces: number;
  optionCategory: string;
  optionDetail: string;
  deliveryState: string;
}

export interface DeliveryInfo {
  receiverName: string;
  receiverPhone: string;
  address: string;
  request?: string | null;
}

export interface PaymentInfo {
  productPrice: number;
  deliveryFee: number;
  totalPrice: number;
}

export interface OrderDetailInfo {
  date: Date;
  products: OrderProductInfo[];
  delivery: DeliveryInfo;
  payment: PaymentInfo;
}
