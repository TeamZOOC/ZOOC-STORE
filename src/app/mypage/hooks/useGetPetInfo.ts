import { getPet } from '@/apis/pet';
import { PetDataInfo } from '@/types/pet';
import { useQuery } from '@tanstack/react-query';

const useGetPet = () => {
  const { data, isLoading, error } = useQuery<PetDataInfo>(['pet'], getPet);

  return {
    petInfo: data,
    isLoading,
    isError: error,
  };
};

export default useGetPet;
