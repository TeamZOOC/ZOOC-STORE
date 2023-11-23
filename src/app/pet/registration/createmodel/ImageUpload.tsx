'use client';

import React, { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

// import useDatasetUpload from '../hooks/useDatasetUpload';
import { createDataset, uploadDatasetImages } from '@/apis/pet';
import useRegisterPet from '@/app/mypage/hooks/useRegisterPet';
import { BottomButton } from '@/components/button';
import { useMultipleImageUpload } from '@/hooks/image';
import { useModal } from '@/hooks/modal';
import { petRegisterState, uploadImagesState } from '@/recoil/pet/atom';

import ImageConfirm from './ImageConfirm';
import ImageGuide from './ImageGuide';

// import ImageUploadLoading from './ImageUploadLoading';

const ImageUpload = () => {
  const { uploadImages, handleImageChange, handleResetImage } =
    useMultipleImageUpload();
  const [validatedImages, setValidatedImages] =
    useRecoilState<File[]>(uploadImagesState);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { openModal, closeModal } = useModal();

  const petRegisterData = useRecoilValue(petRegisterState);
  // const petId = 1;

  const { registerPet } = useRegisterPet();
  // const { handleDatasetUpload, isLoading } = useDatasetUpload({
  //   petId,
  //   files: validatedImages,
  // });

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

  const handlePetRegister = async () => {
    try {
      const resPetId = await registerPet(petRegisterData);
      console.log(resPetId);
      return resPetId;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const handleCreateDataset = async (petId: number) => {
    try {
      const resDatasetId = await createDataset(petId);
      console.log(resDatasetId);
      return resDatasetId;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const handleUploadDatasetImages = async (
    datasetId: string,
    files: File[],
  ) => {
    try {
      const res = await uploadDatasetImages(datasetId, files);
      console.log(res);
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const handleImageUpload = async () => {
    const petId = await handlePetRegister();
    if (petId) {
      const datasetId = await handleCreateDataset(petId);
      if (datasetId) {
        await handleUploadDatasetImages(datasetId, validatedImages);
      }
    }
  };

  useEffect(() => {
    if (uploadImages.length > 0) {
      handleImageValidate(uploadImages.length);
    }
  }, [uploadImages]);

  // if (isLoading) return <ImageUploadLoading />;

  return (
    <StImageUpload>
      <StImageInput
        type="file"
        multiple
        ref={imageInputRef}
        onChange={handleImageChange}
        accept="image/*"
      />
      {validatedImages.length === 0 ? (
        <>
          <ImageGuide />
          <BottomButton
            btnType="button"
            btnName="8 - 15장의 사진 업로드"
            disabled={false}
            activeFunc={handleUploadImage}
          />
        </>
      ) : (
        <>
          <ImageConfirm />
          <BottomButton
            btnType="button"
            btnName="사진 업로드 완료"
            disabled={false}
            activeFunc={handleImageUpload}
          />
        </>
      )}
    </StImageUpload>
  );
};

export default ImageUpload;

const StImageUpload = styled.div``;

const StImageInput = styled.input`
  display: none;
`;
