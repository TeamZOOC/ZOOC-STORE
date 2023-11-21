'use client';

import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { BottomButton } from '@/components/button';
import { useMultipleImageUpload } from '@/hooks/image';
import { useModal } from '@/hooks/modal';
import { uploadImagesState } from '@/recoil/createmodel/atom';

import useCreateDataset from '../hooks/useCreateDataset';
import ImageConfirm from './ImageConfirm';
import ImageGuide from './ImageGuide';

const ImageUpload = () => {
  const { uploadImages, handleImageChange, handleResetImage } =
    useMultipleImageUpload();
  const [validatedImages, setValidatedImages] =
    useRecoilState<File[]>(uploadImagesState);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { openModal, closeModal } = useModal();

  const { createDataset } = useCreateDataset();

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

  useEffect(() => {
    createDataset(523);
  }, []);

  useEffect(() => {
    if (uploadImages.length > 0) {
      handleImageValidate(uploadImages.length);
    }
  }, [uploadImages]);

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
            activeFunc={() => {
              console.log('다음페이지');
              // createDataset(523);
            }}
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
