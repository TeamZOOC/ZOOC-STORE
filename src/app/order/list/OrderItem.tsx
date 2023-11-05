/* eslint-disable no-unused-vars */
import styled from 'styled-components';

import { OrderInfo, OrderListInfo } from '@/types/order';
import { formatDate } from '@/utils/formatDate';

import { IcArrowRight } from '../../../../public/icons';
import OrderProduct from './OrderProduct';

interface OrderItemProps {
  order: OrderListInfo | OrderInfo[];
  date?: Date;
  onDetailClick?: (id: number) => void;
}

const OrderItem = ({ order, date, onDetailClick }: OrderItemProps) => {
  let orderData: OrderInfo[];
  let orderId: number;

  if ('data' in order) {
    orderData = order.data;
    orderId = order.id;
  } else {
    orderData = order;
  }

  return (
    <StOrderItem>
      <StOrderTitle>
        {date ? (
          <p>{formatDate(date)}</p>
        ) : (
          <p>{orderData[0]?.createdAt && formatDate(orderData[0].createdAt)}</p>
        )}
        {onDetailClick && (
          <button type="button" onClick={() => onDetailClick(orderId)}>
            주문상세
            <IcArrowRight />
          </button>
        )}
      </StOrderTitle>
      {orderData.map((orderItem) => (
        <OrderProduct key={orderItem.id} order={orderItem} />
      ))}
    </StOrderItem>
  );
};

export default OrderItem;

const StOrderItem = styled.article`
  & > :last-child {
    padding-bottom: 3.6rem;
  }
`;

const StOrderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0rem 2.8rem;

  & > p {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_price_middle};
  }
  & > button {
    display: flex;
    align-items: center;
    gap: 1rem;

    height: 3.6rem;

    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_caption};
  }
`;
