'use client';

import { styled } from 'styled-components';

import { BottomButton } from '@/components/button';
import { ORDER_DETAIL } from '@/mocks/orderDetailData';

import CustomerInfo from './customerInfo/CustomerInfo';
import ProductInfo from './productInfo/ProductInfo';

const Order = () => {
  console.log('주문하기');
  return (
    <StOrder>
      <ProductInfo products={ORDER_DETAIL.products} />
      <StHr />
      <CustomerInfo />
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

const StOrder = styled.div``;

const StHr = styled.hr`
  height: 0.1rem;
  margin: 0 0 0 2.8rem;

  border: none;
  background-color: ${({ theme }) => theme.colors.zw_brightgray};
`;
