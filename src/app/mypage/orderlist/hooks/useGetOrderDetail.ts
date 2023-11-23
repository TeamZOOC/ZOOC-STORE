import { getOrderDetail } from '@/apis/order';
import { OrderDetailInfo } from '@/types/order';
import { useQuery } from '@tanstack/react-query';

const useGetOrderDetail = (id: string) => {
  const { data, error } = useQuery<OrderDetailInfo>(['orderdetail', id], () =>
    getOrderDetail(id),
  );

  return {
    orderDetail: data,
    isError: error,
  };
};

export default useGetOrderDetail;
