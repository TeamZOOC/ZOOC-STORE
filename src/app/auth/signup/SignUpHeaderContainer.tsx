'use client';

import { Header } from '@/components/header';
import { useModal } from '@/hooks/modal';
import useProgress from '@/hooks/progress/useProgress';

const SignUpHeaderContainer = () => {
  const { openModal } = useModal();
  useProgress();
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
