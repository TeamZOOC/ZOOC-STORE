'use client';

import { useRouter } from 'next/navigation';

import { Header } from '@/components/header';
import useProgress from '@/hooks/progress/useProgress';

const ProductDetailHeaderContainer = () => {
  const router = useRouter();
  useProgress();
  return <Header sideMenu backFunc={() => router.back()} />;
};

export default ProductDetailHeaderContainer;
