'use client';

import { Header } from '@/components/header';
import { useModal } from '@/hooks/modal';
import useProgress from '@/hooks/progress/useProgress';

const ImageUploadHeader = () => {
  const { openModal } = useModal();
  useProgress();

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
