'use client';

import { styled } from 'styled-components';

import { BottomButton } from '@/components/button';
import { PaymentInfo } from '@/components/order';
import { ORDER_DETAIL } from '@/mocks/orderDetailData';

import CustomerInfo from './customerInfo/CustomerInfo';
import DeliveryInfo from './deliveryInfo/DeliveryInfo';
import PaymentMethod from './paymentMethod/PaymentMethod';
import ProductInfo from './productInfo/ProductInfo';

const Order = () => {
  const { products, payment } = ORDER_DETAIL;
  return (
    <StOrder>
      <ProductInfo products={products} />
      <StHr />
      <CustomerInfo />
      <DeliveryInfo />
      <StHr />
      <PaymentMethod />
      <StHr />
      <StPaymentInfoWrapper>
        <PaymentInfo
          productPrice={payment.productPrice}
          deliveryFee={payment.deliveryFee}
          totalPrice={payment.totalPrice}
        />
      </StPaymentInfoWrapper>
      <StHr />
      <BottomButton
        btnType="button"
        btnName="38,000원 결제하기"
        disabled
        activeFunc={() => {
          console.log('무통장입금 페이지 라우팅');
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

const StPaymentInfoWrapper = styled.div`
  padding: 4rem 2.8rem;
`;
