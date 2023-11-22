'use client';

import { styled } from 'styled-components';

import { ORDER_DETAIL } from '@/mocks/orderDetailData';

import { BillingInfo, DetailInfo } from '../../../../../components/order';
import OrderDetailItem from './OrderDetailItem';

const OrderDetail = () => {
  const { createdAt, address, products, payment } = ORDER_DETAIL;

  return (
    <StDetailWrapper>
      <OrderDetailItem date={createdAt} products={products} />
      <StHr />
      {address && (
        <StDetailSection>
          <StDetailTitle> 배송 정보</StDetailTitle>
          <StDeliveryInfo>
            <DetailInfo label="수령인" value={address.receiverName} />
            <DetailInfo label="연락처" value={address.receiverPhone} />
            <DetailInfo label="배송지" value={address.address} />
            <DetailInfo label="요청사항" value={address.request} />
          </StDeliveryInfo>
        </StDetailSection>
      )}
      <StHr />
      {payment && (
        <StDetailSection>
          <BillingInfo payment={payment} />
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
