/* eslint-disable no-new */

'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

import { createDataset } from '@/apis/pet';
import useRegisterPet from '@/app/mypage/hooks/useRegisterPet';
import { BottomButton } from '@/components/button';
import { LoadingConvertImage } from '@/components/loading';
import { useMultipleImageUpload } from '@/hooks/image';
import { useModal } from '@/hooks/modal';
import { useToast } from '@/hooks/toast';
import { returnPathState } from '@/recoil/order/atom';
import {
  petIdState,
  petRegisterState,
  uploadImagesState,
} from '@/recoil/pet/atom';
import { userState } from '@/recoil/user/atom';
import { uploadImagesService } from '@/utils/uploadImagesService';

import ImageConfirm from './ImageConfirm';
import ImageGuide from './ImageGuide';
import ImageUploadLoading from './ImageUploadLoading';

const ImageUpload = () => {
  const { uploadImages, handleImageChange, handleResetImage, isImageLoading } =
    useMultipleImageUpload();
  const [validatedImages, setValidatedImages] =
    useRecoilState<File[]>(uploadImagesState);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { openModal, closeModal } = useModal();
  const { showToast } = useToast();
  const [, setUserStatus] = useRecoilState(userState);
  const [petIdStatus, setPetIdStatus] = useRecoilState(petIdState);
  const [returnPath, setReturnPath] = useRecoilState(returnPathState);
  const router = useRouter();

  const petRegisterData = useRecoilValue(petRegisterState);
  const { registerPet } = useRegisterPet();
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadImage = () => {
    imageInputRef.current?.click();
  };

  const handleOpenValidateModal = (modalTitle: string) => {
    openModal('imageValidate', {
      title: modalTitle,
      content: '8장 이상 15장 미만의 사진을 선택해주세요',
      handleReset: () => {
        handleResetImage();
        handleUploadImage();
        closeModal('imageValidate');
      },
      handleCancel: () => {
        handleResetImage();
        closeModal('imageValidate');
      },
    });
  };

  const handleImageValidate = (imageLength: number) => {
    if (imageLength < 8 || imageLength >= 16) {
      const title =
        uploadImages.length < 8
          ? '생성에 필요한 사진이 부족해요'
          : '현재 고른 사진이 너무 많아요';
      handleOpenValidateModal(title);
      return;
    }
    setValidatedImages(uploadImages);
  };

  const handleCreateModel = async () => {
    setIsLoading(true);
    try {
      let petId;
      if (petIdStatus) {
        petId = petIdStatus;
      } else {
        petId = await registerPet(petRegisterData);
        setPetIdStatus(petId);
      }
      const datasetId = await createDataset(petId);
      await uploadImagesService(datasetId, validatedImages);
      setUserStatus('IMAGE_EXISTS');

      if (returnPath) {
        router.push(returnPath);
        setReturnPath(undefined);
      } else {
        router.push('/mypage');
      }
    } catch (e) {
      setIsLoading(false);
      showToast('dataset_upload_error');
      console.error(e);
    }
  };

  useEffect(() => {
    if (uploadImages.length > 0) {
      handleImageValidate(uploadImages.length);
    }
  }, [uploadImages]);

  if (isLoading) return <ImageUploadLoading />;

  return (
    <StImageUpload>
      <StImageInput
        type="file"
        multiple
        ref={imageInputRef}
        onChange={handleImageChange}
        accept=".png, .jpg, .jpeg, .webp"
      />
      {isImageLoading && <LoadingConvertImage />}
      {validatedImages.length === 0 ? (
        <>
          <ImageGuide />
          <BottomButton
            btnType="button"
            btnName="8 - 15장의 사진 업로드"
            disabled={false}
            activeFunc={handleUploadImage}
            position="sticky"
          />
        </>
      ) : (
        <>
          <ImageConfirm />
          <BottomButton
            btnType="button"
            btnName="사진 업로드 완료"
            disabled={false}
            activeFunc={handleCreateModel}
            position="absolute"
          />
        </>
      )}
    </StImageUpload>
  );
};

export default ImageUpload;

const StImageUpload = styled.div`
  padding-top: 1.6rem;
`;

const StImageInput = styled.input`
  display: none;
`;
