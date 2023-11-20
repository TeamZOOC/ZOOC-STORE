import { editPet } from '@/apis/pet';
import { PetEditInfo } from '@/types/pet';
import { useMutation } from '@tanstack/react-query';

interface EditPetParams {
  petId: number;
  editPetInfo: PetEditInfo;
}

const useEditPet = () => {
  const { mutateAsync, isLoading, isError } = useMutation(
    async ({ petId, editPetInfo }: EditPetParams) =>
      editPet(petId, editPetInfo),
  );

  return {
    editPet: mutateAsync,
    isLoading,
    error: isError,
  };
};

export default useEditPet;
