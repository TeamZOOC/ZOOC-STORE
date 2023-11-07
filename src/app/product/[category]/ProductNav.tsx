'use client';

import { styled } from 'styled-components';

const ProductNav = () => (
  <StProductNav>
    <StProductItem>전체</StProductItem>
    <StProductItem>전체</StProductItem>
    <StProductItem>전체</StProductItem>
    <StProductItem>전체</StProductItem>
    <StProductItem>전체</StProductItem>
  </StProductNav>
);

export default ProductNav;

const StProductNav = styled.nav`
  position: sticky;
  top: 6.8rem;
  padding-top: 1.2rem;
  margin-left: 2.8rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
  background-color: ${({ theme }) => theme.colors.zw_background};
  z-index: 1;
`;

const StProductItem = styled.button`
  padding: 0 1rem 1.2rem 1rem;

  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead1};
`;
