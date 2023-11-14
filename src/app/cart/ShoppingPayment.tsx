'use client';

import { BottomButton } from '@/components/button';
import { styled } from 'styled-components';

const ShoppingPayment = () => (
  <>
    <StShoppingPayment>
      <StShoppingPaymentTitle>결제 정보</StShoppingPaymentTitle>
      <StShoppingPaymentInfoWrapper>
        <StShoppingPaymentInfo>
          <StShoppingPaymentInfoTitle $color="gray">
            상품 금액
          </StShoppingPaymentInfoTitle>
          <StShoppingPaymentInfoPrice>35,000 원</StShoppingPaymentInfoPrice>
        </StShoppingPaymentInfo>
        <StShoppingPaymentInfo>
          <StShoppingPaymentInfoTitle $color="gray">
            상품 금액
          </StShoppingPaymentInfoTitle>
          <StShoppingPaymentInfoPrice>35,000 원</StShoppingPaymentInfoPrice>
        </StShoppingPaymentInfo>
      </StShoppingPaymentInfoWrapper>
      <StShoppingPaymentInfo>
        <StShoppingPaymentInfoTitle $color="black">
          총 결제금액
        </StShoppingPaymentInfoTitle>
        <div>
          <StShoppingPaymentTotalPrice>35,000</StShoppingPaymentTotalPrice>
          <StShoppingPaymentInfoPrice> 원</StShoppingPaymentInfoPrice>
        </div>
      </StShoppingPaymentInfo>
    </StShoppingPayment>
    <BottomButton
      btnType="button"
      btnName="구매하기"
      disabled={false}
      activeFunc={() => {}}
    />
  </>
);
export default ShoppingPayment;

const StShoppingPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  height: 30rem;
`;

const StShoppingPaymentTitle = styled.span`
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead2}
`;

const StShoppingPaymentInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StShoppingPaymentInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StShoppingPaymentInfoTitle = styled.span<{ $color: string }>`
  color: ${({ theme, $color }) =>
    $color === 'gray' ? theme.colors.zw_gray : theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Body1};
`;
const StShoppingPaymentInfoPrice = styled.span`
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_price_middle};
`;

const StShoppingPaymentTotalPrice = styled.span`
  color: ${({ theme }) => theme.colors.zw_point};
  ${({ theme }) => theme.fonts.zw_price_big};
`;
