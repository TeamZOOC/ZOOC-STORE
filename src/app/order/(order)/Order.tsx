'use client';

import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

import { BottomButton } from '@/components/button';
import { BillingInfo } from '@/components/order';
import { ORDER_DETAIL } from '@/mocks/orderDetailData';

import Agreement from './agreement/Agreement';
import CustomerInfo from './customerInfo/CustomerInfo';
import DeliveryInfo from './deliveryInfo/DeliveryInfo';
import PaymentMethod from './paymentMethod/PaymentMethod';
import ProductInfo from './productInfo/ProductInfo';

const Order = () => {
  const { products, payment } = ORDER_DETAIL;
  const router = useRouter();
  return (
    <StOrder>
      <ProductInfo products={products} />
      <StHr />
      <CustomerInfo />
      <DeliveryInfo />
      <StHr />
      <PaymentMethod />
      <StHr />
      <StBillingInfoWrapper>
        <BillingInfo payment={payment} />
      </StBillingInfoWrapper>
      <StHr />
      <Agreement />
      <BottomButton
        btnType="button"
        btnName="38,000원 결제하기"
        disabled={false}
        activeFunc={() => {
          router.push('/order/payment');
        }}
      />
    </StOrder>
  );
};

export default Order;

const StOrder = styled.div`
  margin-bottom: 7.7rem;
`;

const StHr = styled.hr`
  height: 0.1rem;
  margin: 0 0 0 2.8rem;

  border: none;
  background-color: ${({ theme }) => theme.colors.zw_brightgray};
`;

const StBillingInfoWrapper = styled.div`
  padding: 4rem 2.8rem;
`;
