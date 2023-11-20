'use client';

import Image from 'next/image';
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

import { IcBtnPicture } from '../../../../public/icons';
import { ImgProfileEmpty } from '../../../../public/images';

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
        <StEditForm onSubmit={handleSubmit(onSubmit)}>
          <StUploadProfileImage>
            {petInfo?.photo ? (
              <StProfileImage src={petInfo?.photo} alt="프로필 이미지" />
            ) : (
              <Image
                src={ImgProfileEmpty}
                width={90}
                height={90}
                alt="프로필 이미지"
              />
            )}
            <IcBtnPicture />
          </StUploadProfileImage>
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
        </StEditForm>
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
  padding-top: 2.8rem;

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

const StEditForm = styled.form``;

const StUploadProfileImage = styled.div`
  position: relative;
  margin-bottom: 3.6rem;

  & > svg {
    position: absolute;
    bottom: 0;
    left: 6.8rem;
  }
`;

const StProfileImage = styled.img`
  min-width: 9rem;
  min-height: 9rem;

  border-radius: 5rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
  background: ${({ theme }) => theme.colors.zw_brightgray};
`;
