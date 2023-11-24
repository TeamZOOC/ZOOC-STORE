'use client';

import { Header } from '@/components/header';
import { useModal } from '@/hooks/modal';
import useProgress from '@/hooks/progress/useProgress';

const OrderHeader = () => {
  const { openModal } = useModal();
  useProgress();
  return (
    <Header
      headerTitle="주문하기"
      exit
      backFunc={() => {
        openModal('orderQuit', { route: 'back' });
      }}
      exitFunc={() => {
        openModal('orderQuit', { route: 'home' });
      }}
    />
  );
};

export default OrderHeader;
