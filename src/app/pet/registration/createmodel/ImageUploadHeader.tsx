'use client';

import { useRouter } from 'next/navigation';

import { Header } from '@/components/header';

const ImageUploadHeader = () => {
  const router = useRouter();
  return (
    <Header
      headerTitle="AI 모델 생성"
      exit
      backFunc={() => {
        router.back();
      }}
      exitFunc={() => {
        router.push('/mypage');
      }}
    />
  );
};

export default ImageUploadHeader;
