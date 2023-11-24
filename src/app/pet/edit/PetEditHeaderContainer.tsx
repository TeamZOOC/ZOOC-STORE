'use client';

import { useRouter } from 'next/navigation';

import { Header } from '@/components/header';
import useProgress from '@/hooks/progress/useProgress';

const PetEditHeaderContainer = () => {
  const router = useRouter();
  useProgress();
  return (
    <Header headerTitle="프로필 수정" backFunc={() => router.push('/mypage')} />
  );
};

export default PetEditHeaderContainer;
