import { getProduct } from '@/apis/product';
import { ProductInfoResponse } from '@/types/product';
import { useQuery } from '@tanstack/react-query';

const useGetProduct = (categoryName: string) => {
  const { data: productList } = useQuery<ProductInfoResponse[]>(
    ['product', categoryName],
    () => getProduct(categoryName),
  );

  return {
    productList,
  };
};

export default useGetProduct;
