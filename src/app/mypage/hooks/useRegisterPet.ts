import { registerPet } from '@/apis/pet';
import { useMutation } from '@tanstack/react-query';

const useRegisterPet = () => {
  const { mutateAsync, isLoading, isError } = useMutation(registerPet);

  return {
    registerPet: mutateAsync,
    isLoading,
    error: isError,
  };
};

export default useRegisterPet;
