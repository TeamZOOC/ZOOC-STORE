'use client';

import { CATEGORY_LIST } from '@/constants/category';
import { css, styled } from 'styled-components';
import React, { useEffect, useRef } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const ProductNav = () => {
  const pathname = usePathname();
  const activeItemRef = useRef<HTMLButtonElement | null>(null);

  const scrollToActiveItem = () => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToActiveItem();
  }, [pathname]);

  return (
    <StProductNav>
      {CATEGORY_LIST.map(({ id, categoryName, categoryPath }) => (
        <StProductItem
          key={id}
          $active={pathname.includes(categoryPath)}
          ref={(el) => {
            if (pathname.includes(categoryPath)) {
              activeItemRef.current = el;
            }
          }}
        >
          <Link href={categoryPath} scroll={false}>
            {categoryName}
          </Link>
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

  z-index: ${({ theme }) => theme.zIndex.zw_tab};
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StProductItem = styled.button<{ $active: boolean }>`
  padding: 0 1.4rem 1.2rem 1.4rem;

  color: ${({ theme }) => theme.colors.zw_lightgray};

  ${({ $active }) =>
    $active &&
    css`
      color: ${({ theme }) => theme.colors.zw_black};
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_black};
    `}
  ${({ theme }) => theme.fonts.zw_Subhead1};
`;