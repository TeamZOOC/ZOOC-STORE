import { editPet } from '@/apis/pet';
import { useMutation } from '@tanstack/react-query';

const useEditPet = () => {
  const { mutateAsync, isLoading, isError } = useMutation(
    async ({ petId, editPetInfo }: any) => editPet(petId, editPetInfo),
  );

  return {
    editPet: mutateAsync,
    isLoading,
    error: isError,
  };
};

export default useEditPet;
