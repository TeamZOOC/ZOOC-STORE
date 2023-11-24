/* eslint-disable react/no-array-index-key */

'use client';

import { styled } from 'styled-components';

import useGetOrderList from '../hooks/useGetOrderList';
import OrderItem from './OrderItem';
import OrderListEmpty from './OrderListEmpty';

const OrderList = () => {
  const { orderList } = useGetOrderList();

  return (
    <StOrderListWrapper>
      {orderList?.length !== 0 ? (
        orderList?.map((orderInfo, index) => (
          <>
            <OrderItem key={index} order={orderInfo} />
            {orderList.indexOf(orderInfo) !== orderList.length - 1 && <StHr />}
          </>
        ))
      ) : (
        <OrderListEmpty />
      )}
    </StOrderListWrapper>
  );
};

export default OrderList;

const StOrderListWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const StHr = styled.hr`
  height: 0.1rem;
  margin: 0 0 1.2rem 2.8rem;

  border: none;
  background-color: ${({ theme }) => theme.colors.zw_brightgray};
`;
