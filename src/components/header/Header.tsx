import styled from 'styled-components';
import {
  IcBack,
  IcZooc,
  IcOrderList,
  IcCart,
  IcExit,
} from '../../../public/icons';

interface HeaderProps {
  page?: string;
  title?: string;
  exit?: boolean;
  sideMenu?: boolean;
}

const Header = ({ page, title, exit, sideMenu }: HeaderProps) => (
  <StHeader>
    {page === 'home' ? <IcZooc /> : <IcBack />}
    <StHeaderTitle>{title}</StHeaderTitle>
    {sideMenu ? (
      <StHeaderRight>
        {exit ? (
          <IcExit />
        ) : (
          <>
            <IcOrderList />
            <IcCart />
          </>
        )}
      </StHeaderRight>
    ) : (
      <StEmpty />
    )}
  </StHeader>
);

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
