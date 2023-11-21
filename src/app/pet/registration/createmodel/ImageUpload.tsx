'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { BottomButton } from '@/components/button';
import { useMultipleImageUpload } from '@/hooks/image';
import { useModal } from '@/hooks/modal';
import { useToast } from '@/hooks/toast';
import { uploadImagesState } from '@/recoil/createmodel/atom';

import useCreateDataset from '../hooks/useCreateDataset';
import useUploadDatasetImages from '../hooks/useUploadDatasetImages';
import ImageConfirm from './ImageConfirm';
import ImageGuide from './ImageGuide';

const ImageUpload = () => {
  const { uploadImages, handleImageChange, handleResetImage } =
    useMultipleImageUpload();
  const [validatedImages, setValidatedImages] =
    useRecoilState<File[]>(uploadImagesState);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const { openModal, closeModal } = useModal();
  const { showToast } = useToast();

  const router = useRouter();
  const params = useSearchParams();
  const petId = Number(params.get('petId'));

  const { createDataset, datasetId } = useCreateDataset();
  const { uploadDatasetImages, isLoading } = useUploadDatasetImages();
  const [isMount, setIsMount] = useState(false);

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

  const handleDatasetUpload = async () => {
    try {
      await uploadDatasetImages({ datasetId, files: validatedImages });
      // TODO : 완료됐을때 라우팅 처리 필요 (마이페이지 / 주문하기)
      router.push('/mypage');
    } catch (error) {
      showToast('dataset_upload_error');
      console.error('이미지 업로드 실패', error);
    }
  };

  useEffect(() => {
    setIsMount(true);
  }, []);

  useEffect(() => {
    if (isMount) {
      console.log('마운트');
      createDataset(petId);
    }
  }, [isMount]);

  useEffect(() => {
    if (uploadImages.length > 0) {
      handleImageValidate(uploadImages.length);
    }
  }, [uploadImages]);

  if (isLoading) return <div>로딩중</div>;

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
              handleDatasetUpload();
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
