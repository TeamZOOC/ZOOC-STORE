import { styled } from 'styled-components';

import { formatPrice } from '@/utils/formatPrice';

import DetailInfo from './DetailInfo';

interface PaymentInfoProps {
  productPrice: number;
  deliveryFee: number;
  totalPrice: number;
}

const PaymentInfo = ({
  productPrice,
  deliveryFee,
  totalPrice,
}: PaymentInfoProps) => (
  <StPaymentInfo>
    <StPaymentTitle> 결제 정보</StPaymentTitle>
    <StPayment>
      <DetailInfo label="상품 금액" value={`${formatPrice(productPrice)} 원`} />
      <DetailInfo label="배송비" value={`${formatPrice(deliveryFee)} 원`} />
    </StPayment>
    <StTotalPrice>
      <strong>총 결제금액</strong>
      <p>
        <span>{formatPrice(totalPrice)}</span> 원
      </p>
    </StTotalPrice>
  </StPaymentInfo>
);

export default PaymentInfo;

const StPaymentInfo = styled.div``;

const StPaymentTitle = styled.h2`
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead1};
`;

const StPayment = styled.div`
  & > p {
    display: flex;
    justify-content: space-between;

    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_price_middle};
  }
  & > p > strong {
    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
  & > p:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

const StTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2.6rem;

  & > strong {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
  & > p {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_price_middle};
  }
  & > p > span {
    color: ${({ theme }) => theme.colors.zw_point};
    ${({ theme }) => theme.fonts.zw_price_big};
  }
`;
