import { getOrderList } from '@/apis/order';
import { OrderListInfo } from '@/types/order';
import { useQuery } from '@tanstack/react-query';

const useGetOrderList = () => {
  const { data, error } = useQuery<OrderListInfo[]>(
    ['orderlist'],
    getOrderList,
  );

  return {
    orderList: data,
    isError: error,
  };
};

export default useGetOrderList;
