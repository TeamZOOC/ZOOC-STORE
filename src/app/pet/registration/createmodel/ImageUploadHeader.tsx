'use client';

import { useRouter } from 'next/navigation';

import { Header } from '@/components/header';
import { useModal } from '@/hooks/modal';

const ImageUploadHeader = () => {
  const router = useRouter();
  const { openModal } = useModal();

  return (
    <Header
      headerTitle="AI 모델 생성"
      exit
      backFunc={() => {
        router.back();
      }}
      exitFunc={() => {
        openModal('petRegisterQuit');
      }}
    />
  );
};

export default ImageUploadHeader;
