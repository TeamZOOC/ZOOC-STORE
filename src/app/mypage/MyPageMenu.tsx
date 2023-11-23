'use client';

import { deleteCookie, getCookie } from 'cookies-next';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { MYPAGE_MENU } from '@/constants/mypage';
import { useModal } from '@/hooks/modal';
import { userState } from '@/recoil/user/atom';

import { IcLogout } from '../../../public/icons';

const MyPageMenu = () => {
  const { openModal } = useModal();
  const [, setUserStatus] = useRecoilState(userState);
  const kakaoAccessToken = getCookie('kakaoAccessToken');

  const handleLogout = () => {
    if (kakaoAccessToken) {
      deleteCookie('kakaoAccessToken');
    }
    deleteCookie('accessToken');
    signOut({ callbackUrl: 'http://localhost:3000/' });
    setUserStatus('GUEST');
  };

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
      <StMenuItem className="logout">
        <StMenuButton type="button" onClick={handleLogout}>
          <IcLogout />
          로그아웃
        </StMenuButton>
      </StMenuItem>
      <StWithdrawalButton
        type="button"
        onClick={() => {
          openModal('withdraw');
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

  & > .logout {
    border-bottom: 0;
  }
`;

const StMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  height: 6.4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
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
