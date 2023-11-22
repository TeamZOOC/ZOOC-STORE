'use client';

import { Header } from '@/components/header';
import { useModal } from '@/hooks/modal';

const PaymentHeader = () => {
  const { openModal } = useModal();
  return (
    <Header
      headerTitle="입금하기"
      exit
      exitFunc={() => {
        openModal('quit');
      }}
    />
  );
};

export default PaymentHeader;
