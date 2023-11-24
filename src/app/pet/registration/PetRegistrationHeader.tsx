'use client';

import { Header } from '@/components/header';
import { useModal } from '@/hooks/modal';

const PetRegistrationHeader = () => {
  const { openModal } = useModal();

  return (
    <Header
      headerTitle="반려동물 등록"
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

export default PetRegistrationHeader;
