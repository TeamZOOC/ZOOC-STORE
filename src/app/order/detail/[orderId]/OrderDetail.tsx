/* eslint-disable react/no-array-index-key */
import { styled } from 'styled-components';

import { ORDER_DETAIL } from '@/mocks/orderDetailData';
import { formatPrice } from '@/utils/formatPrice';

import OrderItem from '../../list/OrderItem';
import DetailInfo from './DetailInfo';

const OrderDetail = () => {
  const { date, products, delivery, payment } = ORDER_DETAIL;

  return (
    <StDetailWrapper>
      <OrderItem date={date} order={products} />
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
  margin-top: 2.4rem;
  margin-bottom: 3.2rem;
`;

const StDetailSection = styled.div`
  padding: 3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.zw_point};

  & > p:first-child {
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.colors.zw_darkgray};
    ${({ theme }) => theme.fonts.zw_Subhead2};
  }
`;

const StDeliveryInfo = styled.div`
  & > p {
    display: grid;
    grid-template-columns: 2fr 8fr;

    color: ${({ theme }) => theme.colors.zw_gray};

    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  & > p:not(:last-child) {
    margin-bottom: 1.6rem;
  }
  & > p > strong {
    color: ${({ theme }) => theme.colors.zw_gray};

    font-family: 'Pretendard';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const StPaymentInfo = styled.div`
  & > p,
  & > p > strong {
    display: flex;
    justify-content: space-between;

    color: ${({ theme }) => theme.colors.zw_gray};

    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  & > p:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const StTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2.3rem;

  & > strong {
    color: ${({ theme }) => theme.colors.zw_gray};

    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  & > p {
    color: ${({ theme }) => theme.colors.zw_gray};

    font-family: 'Pretendard';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.2rem;
    letter-spacing: -0.01rem;
  }
  & > p > span {
    color: ${({ theme }) => theme.colors.zw_point};

    font-family: 'Pretendard';
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.2rem; /* 110% */
    letter-spacing: -0.01rem;
  }
`;
