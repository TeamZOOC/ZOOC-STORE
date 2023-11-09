'use client';

import React from 'react';
import styled from 'styled-components';
import { usePathname, useRouter } from 'next/navigation';
import {
  IcBack,
  IcZooc,
  IcOrderList,
  IcCart,
  IcExit,
} from '../../../public/icons';

interface HeaderProps {
  headerTitle?: string;
  exit?: boolean;
  sideMenu?: boolean;
  exitFunc?: React.MouseEventHandler;
}

const Header = ({ headerTitle, exit, sideMenu, exitFunc }: HeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <StHeader>
      {pathname === '/' ? <IcZooc /> : <IcBack onClick={() => router.back()} />}
      <StHeaderTitle>{headerTitle}</StHeaderTitle>
      {sideMenu && (
        <StHeaderRight>
          <IcOrderList />
          <IcCart />
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
`;

const StHeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead2};
`;

const StHeaderRight = styled.div``;

const StEmpty = styled.div`
  width: 3.6rem;
`;
