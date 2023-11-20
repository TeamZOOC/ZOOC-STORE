/* eslint-disable no-nested-ternary */

'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { styled } from 'styled-components';

import useEditPet from '@/app/mypage/hooks/useEditPet';
import useGetPet from '@/app/mypage/hooks/useGetPetInfo';
import { BottomButton } from '@/components/button';
import { Input } from '@/components/form';
import { useToast } from '@/hooks/toast';
import { PetEditInfo } from '@/types/pet';

import { IcBtnPicture } from '../../../../public/icons';
import { ImgProfileEmpty } from '../../../../public/images';
import React from '../../../components/modal/ImageValidateModal';

const PetEdit = () => {
  const { petInfo } = useGetPet();
  const { control, watch, handleSubmit, reset } = useForm<PetEditInfo>({
    mode: 'onChange',
    defaultValues: {
      nickName: '',
      file: undefined,
      breed: '',
    },
  });
  const petName = watch('nickName');
  const isFormFilled = petName && petName.trim().length > 0;

  const [uploadImage, setUploadImage] = useState<File>();
  const [imageThumbnail, setImageThumbnail] = useState<string>();
  const imageInputRef = useRef<HTMLInputElement>(null);

  const { editPet } = useEditPet();
  const { showToast } = useToast();
  const router = useRouter();
  const params = useSearchParams();
  const petId = params.get('id');

  const handleUploadImage = () => {
    imageInputRef.current?.click();
  };

  const createThumbnail = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => setImageThumbnail(reader.result as string);
    reader.onerror = () => console.error('썸네일 생성 실패');
    reader.readAsDataURL(file);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadImage(file);
      createThumbnail(file);
    }
  };

  const onSubmit = async (editData: PetEditInfo) => {
    try {
      console.log(editData);
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
            {imageThumbnail ? (
              <StThumbnail src={imageThumbnail} alt="썸네일 이미지" />
            ) : petInfo?.photo ? (
              <StProfileImage src={petInfo?.photo} alt="프로필 이미지" />
            ) : (
              <Image
                src={ImgProfileEmpty}
                width={90}
                height={90}
                alt="프로필 이미지 없음"
              />
            )}
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

const StImageInput = styled.input`
  display: none;
`;

const StUploadProfileImage = styled.div`
  position: relative;
  margin-bottom: 3.6rem;
`;

const StProfileImage = styled.img`
  min-width: 9rem;
  min-height: 9rem;

  object-fit: cover;
  border-radius: 50%;
  border: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
  background: ${({ theme }) => theme.colors.zw_brightgray};
`;

const StThumbnail = styled.img`
  width: 9rem;
  height: 9rem;

  border-radius: 50%;
  object-fit: cover;
`;

const StUploadBtn = styled.button`
  & > svg {
    position: absolute;
    bottom: 0;
    left: 6.8rem;
  }
`;
