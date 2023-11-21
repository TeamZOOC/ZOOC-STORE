import { registerPet } from '@/apis/pet';
import { useMutation } from '@tanstack/react-query';

const useRegisterPet = () => {
  const { data, mutateAsync, isLoading, isError } = useMutation(registerPet);

  return {
    registerPet: mutateAsync,
    petId: data,
    isLoading,
    error: isError,
  };
};

export default useRegisterPet;
