import { getPet } from '@/apis/pet';
import { useQuery } from '@tanstack/react-query';

const useGetPet = () => {
  const { data, error } = useQuery(['pet'], getPet);
  console.log(data?.data);

  return {
    petInfo: data?.data,
    isError: error,
  };
};

export default useGetPet;
