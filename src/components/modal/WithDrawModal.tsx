'use client';

import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import { styled } from 'styled-components';

import { useWithdraw } from '@/app/mypage/hooks/useWithdraw';
import { useModal } from '@/hooks/modal';

const WithDrawModal = () => {
  const { mutate: withdraw } = useWithdraw();
  const { closeModal } = useModal();
  const router = useRouter();

  const handleQuit = useCallback(() => {
    withdraw();
    deleteCookie('accessToken');
    router.push('/');
  }, [router]);

  const handleCancel = useCallback(() => {
    closeModal('withdraw');
  }, [closeModal]);

  return (
    <StQuitModal>
      <strong>회원을 탈퇴 하시겠습니까?</strong>
      <p>회원 탈퇴 시 모든 정보와 내역이 삭제됩니다</p>
      <StButtonWrapper>
        <StQuitButton type="button" onClick={handleQuit}>
          탈퇴하기
        </StQuitButton>
        <StCancelButton type="button" onClick={handleCancel}>
          취소
        </StCancelButton>
      </StButtonWrapper>
    </StQuitModal>
  );
};

export default React.memo(WithDrawModal);

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
