import { AxiosError } from 'axios';

import { getPet } from '@/apis/pet';
import { ErrorResponse } from '@/types/auth';
import { PetDataInfo } from '@/types/pet';
import { useQuery } from '@tanstack/react-query';

const useGetPet = () => {
  const { data, isLoading, error } = useQuery<PetDataInfo, AxiosError>(
    ['pet'],
    getPet,
  );

  let errorStatus;

  if (error && (error as AxiosError<ErrorResponse>).response) {
    errorStatus = (error as AxiosError<ErrorResponse>).response?.data.status;
  }

  return {
    petInfo: data,
    isLoading,
    isError: !!error,
    errorStatus,
  };
};

export default useGetPet;
