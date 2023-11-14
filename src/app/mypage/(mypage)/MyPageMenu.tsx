'use client';

import Link from 'next/link';
import { styled } from 'styled-components';

import {
  IcInquiry,
  IcLogout,
  IcMyOrderList,
  IcNotice,
} from '../../../../public/icons';

const MyPageMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: '주문내역',
      icon: <IcMyOrderList />,
      path: '/mypage/orderlist',
    },
    { id: 2, name: '공지사항', icon: <IcNotice />, path: '/notice' },
    {
      id: 3,
      name: '문의하기',
      icon: <IcInquiry />,
      path: 'https://www.naver.com/',
    },
    {
      id: 4,
      name: '로그아웃',
      icon: <IcLogout />,
      path: '/logout',
    },
  ];

  return (
    <StMyPageMenu>
      {menuItems.map((item) => (
        <StMenuItem key={item.id}>
          <Link href={item.path}>
            <StMenuButton type="button">
              {item.icon}
              {item.name}
            </StMenuButton>
          </Link>
        </StMenuItem>
      ))}
      <StWithdrawalButton type="button">회원탈퇴</StWithdrawalButton>
    </StMyPageMenu>
  );
};

export default MyPageMenu;

const StMyPageMenu = styled.div``;

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
