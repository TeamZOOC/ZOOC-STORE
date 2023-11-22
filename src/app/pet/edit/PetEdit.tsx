'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

import useEditPet from '@/app/mypage/hooks/useEditPet';
import useGetPet from '@/app/mypage/hooks/useGetPetInfo';
import { BottomButton } from '@/components/button';
import { TextInput } from '@/components/form';
import { Thumbnail } from '@/components/image';
import { useImageUpload } from '@/hooks/image';
import { useToast } from '@/hooks/toast';
import { PetEditInfo } from '@/types/pet';

import { IcBtnPicture } from '../../../../public/icons';
import { ImgProfileEmpty } from '../../../../public/images';
import React from '../../../components/modal/ImageValidateModal';

const PetEdit = () => {
  const { petInfo } = useGetPet();
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { isValid },
  } = useForm<PetEditInfo>({
    mode: 'onSubmit',
    defaultValues: {
      nickName: '',
      file: undefined,
      breed: '',
    },
  });
  const { uploadImage, handleImageChange } = useImageUpload();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { editPet } = useEditPet();
  const { showToast } = useToast();

  const router = useRouter();
  const params = useSearchParams();

  const handleUploadImage = () => {
    imageInputRef.current?.click();
  };

  const onSubmit = async (editData: PetEditInfo) => {
    const petId = Number(params.get('id'));
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

  const displayImage = () => {
    if (uploadImage) {
      return <Thumbnail file={uploadImage} />;
    }
    if (petInfo?.photo) {
      return <StProfileImage src={petInfo.photo} alt="프로필 이미지" />;
    }
    return (
      <Image
        src={ImgProfileEmpty}
        width={90}
        height={90}
        alt="프로필 이미지 없음"
      />
    );
  };

  useEffect(() => {
    if (petInfo) {
      reset({
        nickName: petInfo.name,
        breed: petInfo.breed,
      });
    }
  }, [petInfo, reset]);

  useEffect(() => {
    if (uploadImage) {
      setValue('file', uploadImage);
    }
  }, [uploadImage, setValue]);

  return (
    <>
      <StEdit>
        <StEditForm onSubmit={handleSubmit(onSubmit, onError)}>
          <StUploadProfileImage>
            {displayImage()}
            <StImageInput
              type="file"
              ref={imageInputRef}
              onChange={handleImageChange}
              accept="image/*"
            />
            <StUploadBtn type="button" onClick={handleUploadImage}>
              <IcBtnPicture />
            </StUploadBtn>
          </StUploadProfileImage>
          <TextInput
            name="nickName"
            label="이름"
            placeholder="사랑이"
            control={control}
            rules={{ required: true, maxLength: 5 }}
            showCount
          />
          <TextInput
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
        disabled={!isValid}
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

const StImageInput = styled.input`
  display: none;
`;

const StUploadProfileImage = styled.div`
  position: relative;
  margin-bottom: 3.6rem;

  & > img {
    width: 9rem;
    height: 9rem;

    border-radius: 50%;
    border: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
    object-fit: cover;
  }
`;

const StProfileImage = styled.img`
  background: ${({ theme }) => theme.colors.zw_brightgray};
`;

const StUploadBtn = styled.button`
  & > svg {
    position: absolute;
    bottom: 0;
    left: 6.8rem;
  }
`;
