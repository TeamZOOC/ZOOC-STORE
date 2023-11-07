'use client';

import { styled } from 'styled-components';

import { ORDER_DETAIL } from '@/mocks/orderDetailData';

import OrderItem from '../../(order)/OrderItem';
import { DetailInfo, PaymentInfo } from '../../../../../components/order';

const OrderDetail = () => {
  const { date, products, delivery, payment } = ORDER_DETAIL;

  return (
    <StDetailWrapper>
      <OrderItem date={date} order={products} />
      <StHr />
      {delivery && (
        <StDetailSection>
          <StDetailTitle> 배송 정보</StDetailTitle>
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
          <PaymentInfo
            productPrice={payment.productPrice}
            deliveryFee={payment.deliveryFee}
            totalPrice={payment.totalPrice}
          />
        </StDetailSection>
      )}
    </StDetailWrapper>
  );
};

export default OrderDetail;

const StDetailWrapper = styled.section``;

const StHr = styled.hr`
  height: 0.1rem;
  margin: 0 0 0 2.8rem;

  border: none;
  background-color: ${({ theme }) => theme.colors.zw_brightgray};
`;

const StDetailSection = styled.div`
  padding: 3.6rem 2.8rem;
`;

const StDetailTitle = styled.h2`
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead1};
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
