'use client';

import { useRouter } from 'next/navigation';

import { Header } from '@/components/header';
import useProgress from '@/hooks/progress/useProgress';

const OrderListHeader = () => {
  const router = useRouter();
  useProgress();
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
