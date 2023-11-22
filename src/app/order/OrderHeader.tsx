'use client';

import { Header } from '@/components/header';
import { useModal } from '@/hooks/modal';

const OrderHeader = () => {
  const { openModal } = useModal();
  return (
    <Header
      headerTitle="주문하기"
      exit
      backFunc={() => {
        openModal('orderQuit');
      }}
      exitFunc={() => {
        openModal('orderQuit');
      }}
    />
  );
};

export default OrderHeader;
