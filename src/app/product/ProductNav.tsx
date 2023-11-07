'use client';

import { CATEGORY_LIST } from '@/constants/category';
import { css, styled } from 'styled-components';
import React from 'react';
import { useRecoilState } from 'recoil';
import { categorySelectState } from '@/recoil/category/atom';

const ProductNav = () => {
  const [categorySelect, setCategorySelect] =
    useRecoilState(categorySelectState);

  return (
    <StProductNav>
      {CATEGORY_LIST.map(({ id, categoryName }) => (
        <StProductItem
          key={id}
          $active={categoryName === categorySelect}
          onClick={() => setCategorySelect(categoryName)}
        >
          {categoryName}
        </StProductItem>
      ))}
    </StProductNav>
  );
};

export default ProductNav;

const StProductNav = styled.nav`
  position: sticky;
  top: 6.8rem;

  margin-left: 2.8rem;
  padding-top: 1.2rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
  background-color: ${({ theme }) => theme.colors.zw_background};

  z-index: 1;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StProductItem = styled.button<{ $active: boolean }>`
  padding: 0 1rem 1.2rem 1rem;

  color: ${({ theme }) => theme.colors.zw_lightgray};

  ${({ $active }) =>
    $active &&
    css`
      color: ${({ theme }) => theme.colors.zw_black};
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_black};
    `}
  ${({ theme }) => theme.fonts.zw_Subhead1};
`;
