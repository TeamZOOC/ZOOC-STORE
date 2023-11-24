'use client';

import { Header } from '@/components/header';
import { useRouter } from 'next/navigation';

const CartHeaderContainer = () => {
  const router = useRouter();
  return <Header headerTitle="장바구니" backFunc={() => router.back()} />;
};

export default CartHeaderContainer;
