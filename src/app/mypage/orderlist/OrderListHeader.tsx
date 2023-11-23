'use client';

import { useRouter } from 'next/navigation';

import { Header } from '@/components/header';

const OrderListHeader = () => {
  const router = useRouter();
  return (
    <Header
      headerTitle="주문내역"
      backFunc={() => {
        router.back();
      }}
    />
  );
};

export default OrderListHeader;
