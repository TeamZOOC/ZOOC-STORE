/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';

import { ProductInfo } from '@/types/order';
import { formatDate } from '@/utils/formatDate';

import OrderProduct from '../../(order)/OrderProduct';

interface OrderDetailItemProps {
  date: string;
  products: ProductInfo[];
}

const OrderDetailItem = ({ date, products }: OrderDetailItemProps) => (
  <StOrderItem>
    <StOrderTitle>
      <time>{formatDate(date)}</time>
    </StOrderTitle>
    <StProducts>
      {products.map((product, index) => (
        <OrderProduct key={index} order={product} />
      ))}
    </StProducts>
  </StOrderItem>
);
export default OrderDetailItem;

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
