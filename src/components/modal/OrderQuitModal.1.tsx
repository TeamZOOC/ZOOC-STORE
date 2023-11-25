'use client';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import { useModal } from '@/hooks/modal';

import {
  OrderQuitModalProps,
  StButtonWrapper,
  StCancelButton,
  StQuitButton,
  StQuitModal
} from './OrderQuitModal';

export const OrderQuitModal = ({ route }: OrderQuitModalProps) => {
  const { closeModal } = useModal();
  const router = useRouter();
  const [registerPath, setRegisterPath] = useRecoilState(registerPathState);

  const handleQuit = useCallback(() => {
    if (route === 'back') {
      router.back();
    } else if (route === 'home') {
      router.push('/');
    }
    closeModal('orderQuit');
  }, [router]);

  const handleCancel = useCallback(() => {
    closeModal('orderQuit');
  }, [closeModal]);

  return (
    <StQuitModal>
      <strong>구매를 그만두시나요?</strong>
      <p>지금 떠나면 구매 과정이 저장되지 않아요</p>
      <StButtonWrapper>
        <StQuitButton type="button" onClick={handleQuit}>
          그만두기
        </StQuitButton>
        <StCancelButton type="button" onClick={handleCancel}>
          취소하기
        </StCancelButton>
      </StButtonWrapper>
    </StQuitModal>
  );
};
