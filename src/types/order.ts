export interface ProductInfo {
  name: string;
  image: string;
  optionDetails: string[];
  pieces: number;
  price: number;
  sale: number;
  id?: string;
  deliveryState?: string;
}

export interface OrderListInfo {
  createdAt: string;
  products: ProductInfo[];
}

export interface DeliveryInfo {
  receiverName: string;
  receiverPhone: string;
  postcode: string;
  address: string;
  request?: string;
}

export interface PaymentInfo {
  totalProductPrice: number;
  deliveryFee: number;
}

export interface OrderDetailInfo {
  createdAt: string;
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

export interface OptionPostInfo {
  productId: number;
  optionIds: number[];
  pieces: number;
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
  products: OptionPostInfo[];
}
