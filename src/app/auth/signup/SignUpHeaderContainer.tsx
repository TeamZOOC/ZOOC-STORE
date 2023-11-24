'use client';

import { Header } from '@/components/header';
import { useModal } from '@/hooks/modal';

const SignUpHeaderContainer = () => {
  const { openModal } = useModal();
  return (
    <Header
      headerTitle="회원가입"
      exit
      exitFunc={() => openModal('signUp')}
      backFunc={() => openModal('signUp')}
    />
  );
};

export default SignUpHeaderContainer;
