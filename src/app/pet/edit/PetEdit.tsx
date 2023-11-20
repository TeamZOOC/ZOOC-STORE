'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

import useEditPet from '@/app/mypage/hooks/useEditPet';
import useGetPet from '@/app/mypage/hooks/useGetPetInfo';
import { BottomButton } from '@/components/button';
import { Input } from '@/components/form';
import { useToast } from '@/hooks/toast';
import { EditPetFormData, PetEditInfo } from '@/types/pet';

const PetEdit = () => {
  const { petInfo } = useGetPet();
  const { control, watch, handleSubmit, reset } = useForm<EditPetFormData>({
    mode: 'onChange',
    defaultValues: {
      nickName: '',
      breed: '',
    },
  });
  const petName = watch('nickName');
  const isFormFilled = petName?.trim().length > 0;

  const { editPet } = useEditPet();
  const { showToast } = useToast();
  const router = useRouter();
  const params = useSearchParams();
  const petId = params.get('id');

  const onSubmit = async (editData: PetEditInfo) => {
    try {
      await editPet({ petId, editPetInfo: editData });
      router.push('/mypage');
    } catch (error) {
      console.error(error);
    }
  };

  const onError = (errors: any) => {
    if (errors.nickName) {
      showToast('pet_required');
    }
  };

  useEffect(() => {
    if (petInfo) {
      reset({
        nickName: petInfo.name,
        breed: petInfo.breed,
      });
    }
  }, [petInfo, reset]);

  return (
    <>
      <StEdit>
        <h2>반려동물의 정보를 입력해주세요</h2>
        <p>해당 정보는 상품 제작 및 관리에 활용돼요</p>
        <StRegistrationForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="nickName"
            label="이름"
            placeholder="사랑이"
            control={control}
            rules={{ required: true, maxLength: 5 }}
            showCount
          />
          <Input
            name="breed"
            label="종"
            placeholder="포메라니안"
            control={control}
            rules={{ maxLength: 20 }}
            showCount
          />
        </StRegistrationForm>
      </StEdit>
      <BottomButton
        btnName="반려동물 AI 모델 생성하기"
        btnType="button"
        disabled={!isFormFilled}
        activeFunc={handleSubmit(onSubmit, onError)}
      />
    </>
  );
};

export default PetEdit;

const StEdit = styled.div`
  padding-top: 3.8rem;

  & > h2 {
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }
  & > p {
    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
`;

const StRegistrationForm = styled.form`
  margin-top: 6rem;
`;
