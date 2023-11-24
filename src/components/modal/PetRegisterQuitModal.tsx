'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import { styled } from 'styled-components';

import { useModal } from '@/hooks/modal';

interface PetRegisterQuitModalProps {
  route: 'back' | 'home';
}

const PetRegisterQuitModal = ({ route }: PetRegisterQuitModalProps) => {
  const { closeModal } = useModal();
  const router = useRouter();

  const handleQuit = useCallback(() => {
    if (route === 'back') {
      router.back();
    } else if (route === 'home') {
      router.push('/');
    }
    closeModal('petRegisterQuit');
  }, [router]);

  const handleCancel = useCallback(() => {
    closeModal('petRegisterQuit');
  }, [closeModal]);

  return (
    <StQuitModal>
      <strong>등록을 그만두시나요?</strong>
      <p>지금 떠나면 지난 과정들이 저장되지 않아요</p>
      <StButtonWrapper>
        <StQuitButton type="button" onClick={handleQuit}>
          그만두기
        </StQuitButton>
        <StCancelButton type="button" onClick={handleCancel}>
          취소
        </StCancelButton>
      </StButtonWrapper>
    </StQuitModal>
  );
};

export default React.memo(PetRegisterQuitModal);

const StQuitModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 31.9rem;
  height: 19.8rem;
  padding: 4rem 2.8rem 2.8rem 2.8rem;

  box-sizing: border-box;
  border-radius: 0.2rem;
  background: ${({ theme }) => theme.colors.zw_background};
  box-shadow: 0 0 4rem 0 rgba(0, 0, 0, 0.15);

  & > strong {
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }
  & > p {
    margin-bottom: 3rem;

    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body2};
  }
`;

const StButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;

  width: 100%;

  & > button {
    height: 5.1rem;

    border-radius: 0.2rem;
    ${({ theme }) => theme.fonts.zw_Subhead3};
  }
`;

const StQuitButton = styled.button`
  width: 55%;

  background: ${({ theme }) => theme.colors.zw_black};
  color: ${({ theme }) => theme.colors.zw_white};
`;

const StCancelButton = styled.button`
  width: 45%;

  background: ${({ theme }) => theme.colors.zw_lightgray};
  color: ${({ theme }) => theme.colors.zw_white};
`;
