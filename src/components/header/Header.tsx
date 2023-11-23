'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { userState } from '@/recoil/user/atom';

import {
  IcBack,
  IcCart,
  IcExit,
  IcMyPage,
  IcZooc,
} from '../../../public/icons';

interface HeaderProps {
  headerTitle?: string;
  exit?: boolean;
  sideMenu?: boolean;
  backFunc?: React.MouseEventHandler;
  exitFunc?: React.MouseEventHandler;
}

const Header = ({
  headerTitle,
  exit,
  sideMenu,
  backFunc,
  exitFunc,
}: HeaderProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const userStatus = useRecoilValue(userState);

  const showIcon = () => {
    if (pathname === '/') {
      return <IcZooc />;
    }
    if (pathname !== '/order/payment') {
      return <IcBack onClick={backFunc} />;
    }
    return <StEmpty />;
  };

  return (
    <StHeader>
      {showIcon()}
      <StHeaderTitle>{headerTitle}</StHeaderTitle>
      {sideMenu && (
        <StHeaderRight>
          <IcCart onClick={() => router.push('/cart')} />
          <IcMyPage
            onClick={() =>
              userStatus === 'GUEST'
                ? router.push('/auth/login')
                : router.push('/mypage')
            }
          />
        </StHeaderRight>
      )}
      {exit && <IcExit onClick={exitFunc} />}
      {!sideMenu && !exit && <StEmpty />}
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;

  padding: 1.6rem 2.8rem;

  background-color: ${({ theme }) => theme.colors.zw_background};

  z-index: ${({ theme }) => theme.zIndex.zw_header};

  & > svg {
    cursor: pointer;
  }
`;

const StHeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead2};
`;

const StHeaderRight = styled.div`
  & > svg {
    cursor: pointer;
  }
`;

const StEmpty = styled.div`
  width: 3.6rem;
`;
