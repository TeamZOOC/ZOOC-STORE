import { getProductDetail } from '@/apis/product';
import { ProductDetailResponse } from '@/types/product';
import { useQuery } from '@tanstack/react-query';

const useGetProductDetail = (productId: number) => {
  const { data: productDetail } = useQuery<ProductDetailResponse>(
    ['productDetail', productId],
    () => getProductDetail(productId),
    {
      staleTime: 1000 * 60 * 60 * 24,
    },
  );

  return {
    productDetail,
  };
};

export default useGetProductDetail;
