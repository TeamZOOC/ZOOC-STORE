import { createDataset } from '@/apis/pet';
import { useMutation } from '@tanstack/react-query';

const useCreateDataset = () => {
  const { mutateAsync, isLoading, isError } = useMutation(createDataset);

  return {
    createDataset: mutateAsync,
    isLoading,
    error: isError,
  };
};

export default useCreateDataset;
