'use client';

import { Header } from '@/components/header';
import { useRouter } from 'next/navigation';

const PetEditHeaderContainer = () => {
  const router = useRouter();
  return (
    <Header headerTitle="프로필 수정" backFunc={() => router.push('/mypage')} />
  );
};

export default PetEditHeaderContainer;
