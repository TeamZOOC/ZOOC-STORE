import { postOrder } from '@/apis/order';
import { useMutation } from '@tanstack/react-query';

const usePostOrder = () => {
  const { data, mutateAsync, isLoading, isError } = useMutation(postOrder);

  return {
    orderPost: mutateAsync,
    orderResponse: data,
    isLoading,
    error: isError,
  };
};

export default usePostOrder;
