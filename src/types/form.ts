export interface PersonInfo {
  name: string;
  phone: string;
}

export interface AddressInfo {
  address: string;
  postcode: string;
  detailAddress: string;
  request?: string;
}

export interface AgreementInfo {
  checkOrder: boolean;
  privacyPolicy: boolean;
  thirdParty: boolean;
}

export interface OrderFormData {
  orderer: PersonInfo;
  receiver: PersonInfo;
  address: AddressInfo;
  agreement: AgreementInfo;
}

export interface CustomerFormData {
  orderer: PersonInfo;
}

export interface NewDeliveryFormData {
  receiver: PersonInfo;
  address: AddressInfo;
}

export interface AgreementFormData {
  agreement: AgreementInfo;
}
