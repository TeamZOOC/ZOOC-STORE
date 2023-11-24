'use client';

import { useRouter } from 'next/navigation';

import { Header } from '@/components/header';
import useProgress from '@/hooks/progress/useProgress';

const CartHeaderContainer = () => {
  const router = useRouter();
  useProgress();
  return <Header headerTitle="장바구니" backFunc={() => router.back()} />;
};

export default CartHeaderContainer;
