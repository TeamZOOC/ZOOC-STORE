import { createDataset } from '@/apis/pet';
import { useMutation } from '@tanstack/react-query';

const useCreateDataset = () => {
  const { data, mutateAsync, isLoading, isError } = useMutation(createDataset);

  return {
    createDataset: mutateAsync,
    datasetId: data,
    isLoading,
    error: isError,
  };
};

export default useCreateDataset;
