'use client';

import { styled } from 'styled-components';

import { BottomButton } from '@/components/button';
import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';

const ImageUpload = () => {
  console.log('ImageUpload');
  return (
    <>
      <Header headerTitle="이미지 업로드" exit />;
      <MainLayout>
        <StImageUpload>이미지 업로드</StImageUpload>;
      </MainLayout>
      <BottomButton
        btnType="button"
        btnName="8 - 15장의 사진 업로드"
        disabled={false}
        activeFunc={() => {
          console.log('ddd');
        }}
      />
    </>
  );
};

export default ImageUpload;

const StImageUpload = styled.div``;
