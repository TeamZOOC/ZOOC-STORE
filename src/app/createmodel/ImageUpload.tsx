'use client';

import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { BottomButton } from '@/components/button';
import {
  imageThumbnailsState,
  uploadImagesState,
} from '@/recoil/createmodel/atom';

import ImageConfirm from './ImageConfirm';
import ImageGuide from './ImageGuide';

const ImageUpload = () => {
  const [uploadImages, setUploadImages] =
    useRecoilState<File[]>(uploadImagesState);
  const [imageThumbnails, setImageThumbnails] =
    useRecoilState<string[]>(imageThumbnailsState);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleUploadImage = () => {
    imageInputRef.current?.click();
  };

  const createImageURL = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target?.result as string);
      };
      reader.onerror = (event) => {
        reject(event.target?.error);
      };
      reader.readAsDataURL(file);
    });

  const createThumbnails = async () => {
    try {
      const urls = await Promise.all(
        uploadImages.map((file) => createImageURL(file)),
      );
      setImageThumbnails(urls);
    } catch (error) {
      console.error('썸네일 생성 실패', error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const selectFiles = Array.from(files);
      setUploadImages(selectFiles);
      console.log(selectFiles);
    }
  };

  useEffect(() => {
    if (uploadImages.length > 0) {
      createThumbnails();
    }
  }, [uploadImages]);

  return (
    <>
      <StImageUpload>
        {imageThumbnails.length === 0 ? <ImageGuide /> : <ImageConfirm />}
        <StImageInput
          type="file"
          multiple
          ref={imageInputRef}
          onChange={handleImageChange}
          accept="image/*"
        />
      </StImageUpload>
      <BottomButton
        btnType="button"
        btnName="8 - 15장의 사진 업로드"
        disabled={false}
        activeFunc={handleUploadImage}
      />
    </>
  );
};

export default ImageUpload;

const StImageUpload = styled.div``;

const StImageInput = styled.input`
  display: none;
`;
