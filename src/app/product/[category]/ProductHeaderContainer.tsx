'use client';

import { useRouter } from 'next/navigation';

import { Header } from '@/components/header';
import useProgress from '@/hooks/progress/useProgress';

const ProductHeaderContainer = () => {
  const router = useRouter();
  useProgress();

  return <Header sideMenu backFunc={() => router.push('/')} />;
};

export default ProductHeaderContainer;
