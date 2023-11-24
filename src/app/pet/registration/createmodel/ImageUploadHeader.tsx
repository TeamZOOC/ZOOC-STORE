'use client';

import { Header } from '@/components/header';
import { useModal } from '@/hooks/modal';

const ImageUploadHeader = () => {
  const { openModal } = useModal();

  return (
    <Header
      headerTitle="AI 모델 생성"
      exit
      backFunc={() => {
        openModal('petRegisterQuit', { route: 'back' });
      }}
      exitFunc={() => {
        openModal('petRegisterQuit', { route: 'home' });
      }}
    />
  );
};

export default ImageUploadHeader;
