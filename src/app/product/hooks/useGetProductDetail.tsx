import { getProductDetail } from '@/apis/product';
import { useQuery } from '@tanstack/react-query';

const useGetProductDetail = (productId: number) => {
  const { data } = useQuery(
    ['productDetail', productId],
    () => getProductDetail(productId),
    { staleTime: 1000 * 60 * 60 * 24 },
  );

  return {
    productDetail: data,
  };
};

export default useGetProductDetail;
