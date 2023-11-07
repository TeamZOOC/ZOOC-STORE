'use client';

import { styled } from 'styled-components';

import { ORDER_DETAIL } from '@/mocks/orderDetailData';
import { formatPrice } from '@/utils/formatPrice';

import OrderItem from '../../(order)/OrderItem';
import DetailInfo from './DetailInfo';

const OrderDetail = () => {
  const { date, products, delivery, payment } = ORDER_DETAIL;

  return (
    <StDetailWrapper>
      <OrderItem date={date} order={products} />
      <StHr />
      {delivery && (
        <StDetailSection>
          <p> 배송 정보</p>
          <StDeliveryInfo>
            <DetailInfo label="수령인" value={delivery.receiverName} />
            <DetailInfo label="연락처" value={delivery.receiverPhone} />
            <DetailInfo label="배송지" value={delivery.address} />
            <DetailInfo label="요청사항" value={delivery.request} />
          </StDeliveryInfo>
        </StDetailSection>
      )}
      <StHr />
      {payment && (
        <StDetailSection>
          <p> 결제 정보</p>
          <StPaymentInfo>
            <DetailInfo
              label="상품 금액"
              value={`${formatPrice(payment.productPrice)} 원`}
            />
            <DetailInfo
              label="배송비"
              value={`${formatPrice(payment.deliveryFee)} 원`}
            />
          </StPaymentInfo>
          <StTotalPrice>
            <strong>총 결제금액</strong>
            <p>
              <span>{formatPrice(payment.totalPrice)}</span> 원
            </p>
          </StTotalPrice>
        </StDetailSection>
      )}
    </StDetailWrapper>
  );
};

export default OrderDetail;

const StDetailWrapper = styled.section`
  margin-top: 2rem;
`;

const StHr = styled.hr`
  height: 0.1rem;
  margin: 0 0 0 2.8rem;

  border: none;
  background-color: ${({ theme }) => theme.colors.zw_brightgray};
`;

const StDetailSection = styled.div`
  padding: 3.6rem 2.8rem;

  & > p {
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }
`;

const StDeliveryInfo = styled.div`
  & > p {
    display: grid;
    grid-template-columns: 3fr 7fr;

    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
  & > p:not(:last-child) {
    margin-bottom: 1.6rem;
  }
  & > p > strong {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
`;

const StPaymentInfo = styled.div`
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
