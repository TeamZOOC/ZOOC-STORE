/* eslint-disable no-unused-vars */
import styled from 'styled-components';

import { OrderInfo, OrderListInfo } from '@/types/order';
import { formatDate } from '@/utils/formatDate';

import { IcArrowRight } from '../../../../../public/icons';
import OrderProduct from './OrderProduct';

interface OrderItemProps {
  order: OrderListInfo;
  date?: Date | string;
  onDetailClick?: (id: string) => void;
}

const OrderItem = ({ order, date, onDetailClick }: OrderItemProps) => {
  let orderData: OrderInfo[];
  let orderId: string;

  if ('data' in order) {
    orderData = order.data;
    orderId = order.data[0].id;
  } else {
    orderData = order;
  }

  return (
    <StOrderItem>
      <StOrderTitle>
        {date ? (
          <time>{formatDate(date)}</time>
        ) : (
          <time>{order.createdAt && formatDate(order.createdAt)}</time>
        )}
        {onDetailClick && (
          <button type="button" onClick={() => onDetailClick(orderId)}>
            주문상세
            <IcArrowRight />
          </button>
        )}
      </StOrderTitle>
      <StProducts>
        {orderData.map((orderItem) => (
          <OrderProduct key={orderItem.id} order={orderItem} />
        ))}
      </StProducts>
    </StOrderItem>
  );
};

export default OrderItem;

const StOrderItem = styled.article`
  padding: 1.6rem 2.8rem 3.6rem 2.8rem;
`;

const StOrderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.6rem;
  height: 3.6rem;

  & > time {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_price_middle};
  }
  & > button {
    display: flex;
    align-items: center;
    gap: 1rem;

    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_caption};
  }
`;

const StProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
