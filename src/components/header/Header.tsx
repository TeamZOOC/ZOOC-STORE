'use client';

import React from 'react';
import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import {
  IcBack,
  IcZooc,
  IcCart,
  IcExit,
  IcMyPage,
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

  return (
    <StHeader>
      {pathname === '/' ? <IcZooc /> : <IcBack onClick={backFunc} />}
      <StHeaderTitle>{headerTitle}</StHeaderTitle>
      {sideMenu && (
        <StHeaderRight>
          <IcCart />
          <IcMyPage />
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

  padding: 1.6rem 2.8rem;

  background-color: ${({ theme }) => theme.colors.zw_background};
`;

const StHeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead2};
`;

const StHeaderRight = styled.div``;

const StEmpty = styled.div`
  width: 3.6rem;
`;
