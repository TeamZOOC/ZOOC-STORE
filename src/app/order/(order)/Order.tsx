'use client';

import { styled } from 'styled-components';

import { BottomButton } from '@/components/button';

const Order = () => {
  console.log('주문하기');
  return (
    <StOrder>
      주문하기
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
