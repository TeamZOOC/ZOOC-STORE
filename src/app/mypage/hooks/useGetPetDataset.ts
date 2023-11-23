import { getPetDataset } from '@/apis/pet';
import { PetDataSetInfo } from '@/types/pet';
import { useQuery } from '@tanstack/react-query';

const useGetPetDataset = (petId: number) => {
  const { data, error } = useQuery<PetDataSetInfo>(['petDataset', petId], () =>
    getPetDataset(petId),
  );

  return {
    petDataset: data,
    isError: error,
  };
};

export default useGetPetDataset;
