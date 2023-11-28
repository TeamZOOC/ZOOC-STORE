import { AxiosError } from 'axios';

import { postOrder } from '@/apis/order';
import { ErrorResponse } from '@/types/auth';
import { useMutation } from '@tanstack/react-query';

const usePostOrder = () => {
  const { data, mutateAsync, isLoading, error } = useMutation(postOrder);

  let errorStatus;

  if (error && (error as AxiosError<ErrorResponse>).response) {
    errorStatus = (error as AxiosError<ErrorResponse>).response?.data.status;
  }

  return {
    orderPost: mutateAsync,
    orderResponse: data,
    isLoading,
    isError: !!error,
    errorStatus,
  };
};

export default usePostOrder;
