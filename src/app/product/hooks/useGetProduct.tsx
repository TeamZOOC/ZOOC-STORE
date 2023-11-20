import { getProduct } from '@/apis/product';
import { useQuery } from '@tanstack/react-query';

const useGetProduct = () => {
  const { data } = useQuery(['product'], getProduct);

  return {
    productList: data,
  };
};

export default useGetProduct;
