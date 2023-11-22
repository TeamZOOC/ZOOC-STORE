/* eslint-disable react/no-array-index-key */

'use client';

import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

import useGetOrderList from '../hooks/useGetOrderList';
import OrderItem from './OrderItem';

const OrderList = () => {
  const { orderList } = useGetOrderList();
  const router = useRouter();

  const handleOrderDetail = (orderId: string) => {
    router.push(`/mypage/orderlist/${orderId}`);
  };

  return (
    <StOrderListWrapper>
      {orderList?.map((orderInfo, index) => (
        <>
          <OrderItem
            key={index}
            order={orderInfo}
            onDetailClick={handleOrderDetail}
          />
          {orderList.indexOf(orderInfo) !== orderList.length - 1 && <StHr />}
        </>
      ))}
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
