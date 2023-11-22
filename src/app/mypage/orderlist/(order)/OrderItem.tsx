/* eslint-disable no-unused-vars */
import styled from 'styled-components';

import { OrderListInfo } from '@/types/order';
import { formatDate } from '@/utils/formatDate';

import { IcArrowRight } from '../../../../../public/icons';
import OrderProduct from './OrderProduct';

interface OrderItemProps {
  order: OrderListInfo;
  onDetailClick: (id: string) => void;
}

const OrderItem = ({ order, onDetailClick }: OrderItemProps) => {
  const orderData = order.data;
  const orderId = order.data[0].id;

  return (
    <StOrderItem>
      <StOrderTitle>
        <time>{order.createdAt && formatDate(order.createdAt)}</time>
        <button type="button" onClick={() => onDetailClick(orderId!)}>
          주문상세
          <IcArrowRight />
        </button>
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
