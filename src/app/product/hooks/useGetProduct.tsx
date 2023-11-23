import { getProduct } from '@/apis/product';
import { ProductInfoResponse } from '@/types/product';
import { useQuery } from '@tanstack/react-query';

const useGetProduct = (categoryName: string) => {
  const { data: productList, isLoading } = useQuery<ProductInfoResponse[]>(
    ['product', categoryName],
    () => getProduct(categoryName),
  );

  return {
    productList,
    isLoading,
  };
};

export default useGetProduct;
