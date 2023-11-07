'use client';

import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

import { ORDER_LIST } from '@/mocks/orderListData';

import OrderItem from './OrderItem';

const OrderList = () => {
  const orderList = ORDER_LIST;
  const router = useRouter();

  const handleOrderDetail = (orderId: number) => {
    router.push(`/mypage/orderlist/${orderId}`);
  };

  return (
    <StOrderListWrapper>
      {orderList.map((orderInfo) => (
        <>
          <OrderItem
            key={orderInfo.id}
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