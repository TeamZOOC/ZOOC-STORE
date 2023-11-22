'use client';

import Link from 'next/link';
import { styled } from 'styled-components';

import { MYPAGE_MENU } from '@/constants/mypage';

import { useWithdraw } from './hooks/useWithdraw';

const MyPageMenu = () => {
  const { mutate: withdraw } = useWithdraw();

  return (
    <StMyPageMenu>
      {MYPAGE_MENU.map((item) => (
        <StMenuItem key={item.id}>
          <Link href={item.path}>
            <StMenuButton type="button">
              {item.icon}
              {item.name}
            </StMenuButton>
          </Link>
        </StMenuItem>
      ))}
      <StWithdrawalButton
        type="button"
        onClick={() => {
          withdraw();
        }}
      >
        회원탈퇴
      </StWithdrawalButton>
    </StMyPageMenu>
  );
};

export default MyPageMenu;

const StMyPageMenu = styled.div`
  margin-top: 2.8rem;
`;

const StMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  height: 6.4rem;

  &:not(:last-child) {
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
  }
`;

const StMenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Body1};

  & > svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const StWithdrawalButton = styled.button`
  margin-top: 2.4rem;
  padding-bottom: 0.2rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_lightgray};
  color: ${({ theme }) => theme.colors.zw_lightgray};
  ${({ theme }) => theme.fonts.zw_caption};
`;
