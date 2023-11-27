'use client';

import { useRecoilState } from 'recoil';

import { Header } from '@/components/header';
import { useModal } from '@/hooks/modal';
import useProgress from '@/hooks/progress/useProgress';
import { uploadImagesState } from '@/recoil/pet/atom';

const ImageUploadHeader = () => {
  const [validatedImages, setValidatedImages] =
    useRecoilState<File[]>(uploadImagesState);
  const { openModal } = useModal();
  useProgress();

  const handleResetImage = () => {
    setValidatedImages([]);
  };

  return (
    <Header
      headerTitle="AI 모델 생성"
      exit
      backFunc={() => {
        if (validatedImages.length > 0) {
          openModal('petRegisterQuit', {
            route: 'back',
            onBack: handleResetImage,
          });
        } else {
          openModal('petRegisterQuit', { route: 'back' });
        }
      }}
      exitFunc={() => {
        openModal('petRegisterQuit', { route: 'home' });
      }}
    />
  );
};

export default ImageUploadHeader;
