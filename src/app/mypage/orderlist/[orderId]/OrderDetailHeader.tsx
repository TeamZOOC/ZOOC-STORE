'use client';

import { useRouter } from 'next/navigation';

import { Header } from '@/components/header';

const OrderDetailHeader = () => {
  const router = useRouter();
  return (
    <Header
      headerTitle="주문상세"
      exit
      backFunc={() => {
        router.back();
      }}
      exitFunc={() => {
        router.push('/mypage');
      }}
    />
  );
};

export default OrderDetailHeader;
