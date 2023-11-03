'use client';

import { styled } from 'styled-components';

import { BottomButton } from '@/components/button';

const ImageUpload = () => {
  console.log('ImageUpload');
  return (
    <>
      <StImageUpload>이미지 업로드</StImageUpload>{' '}
      <BottomButton
        btnType="button"
        btnName="8 - 15장의 사진 업로드"
        disabled={false}
        activeFunc={() => {
          console.log('ddd');
        }}
      />
      ;
    </>
  );
};

export default ImageUpload;

const StImageUpload = styled.div``;
