'use client';

import { Header } from '@/components/header';
import { useModal } from '@/hooks/modal';
import useProgress from '@/hooks/progress/useProgress';

const PaymentHeader = () => {
  const { openModal } = useModal();
  useProgress();
  return (
    <Header
      headerTitle="입금하기"
      exit
      exitFunc={() => {
        openModal('paymentQuit');
      }}
    />
  );
};

export default PaymentHeader;
