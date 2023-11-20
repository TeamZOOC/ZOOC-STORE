import { AxiosResponse } from 'axios';

import { getPet } from '@/apis/pet';
import { PetDataInfo } from '@/types/pet';
import { useQuery } from '@tanstack/react-query';

const useGetPet = () => {
  const { data, error } = useQuery<AxiosResponse<PetDataInfo>>(['pet'], getPet);

  return {
    petInfo: data?.data,
    isError: error,
  };
};

export default useGetPet;
