import { getProduct } from '@/apis/product';
import { ProductInfoResponse } from '@/types/product';
import { useQuery } from '@tanstack/react-query';

const useGetProduct = () => {
  const { data: productList } = useQuery<ProductInfoResponse[]>(
    ['product'],
    getProduct,
  );

  return {
    productList,
  };
};

export default useGetProduct;
