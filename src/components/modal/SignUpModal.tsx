'use client';

import { deleteCookie } from 'cookies-next';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

import { withdraw } from '@/apis/auth';
import { useModal } from '@/hooks/modal';
import { resetUserToken } from '@/utils/resetUserToken';

const SignUpModal = () => {
  const router = useRouter();
  const { closeModal } = useModal();

  const handleWithdraw = async () => {
    await withdraw();
    await signOut({ callbackUrl: '/auth/login' });
    closeModal('signUp');
    router.push('/auth/login');
    resetUserToken();
  };

  return (
    <StSignUpModal>
      <strong>회원가입을 그만두시나요?</strong>
      <p>지금 떠나면 가입 과정이 저장되지 않아요</p>
      <StButtonWrapper>
        <StSignUpButton type="button" onClick={handleWithdraw}>
          그만두기
        </StSignUpButton>
        <StCancelButton type="button" onClick={() => closeModal('signUp')}>
          취소
        </StCancelButton>
      </StButtonWrapper>
    </StSignUpModal>
  );
};

export default SignUpModal;

const StSignUpModal = styled.div`
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

const StSignUpButton = styled.button`
  width: 55%;

  background: ${({ theme }) => theme.colors.zw_black};
  color: ${({ theme }) => theme.colors.zw_white};
`;

const StCancelButton = styled.button`
  width: 45%;

  background: ${({ theme }) => theme.colors.zw_lightgray};
  color: ${({ theme }) => theme.colors.zw_white};
`;
