'use client';

import { css, styled } from 'styled-components';
import React, { useEffect, useRef } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import useGetCategories from '@/app/(home)/hooks/useGetCategories';

const ProductNav = () => {
  const pathname = usePathname();
  const activeItemRef = useRef<HTMLButtonElement | null>(null);
  const { categoryList } = useGetCategories();

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
      <StProductItem
        $active={pathname.includes('all')}
        ref={(el) => {
          if (pathname.includes('all')) {
            activeItemRef.current = el;
          }
        }}
      >
        <Link href="/product/all">all</Link>
      </StProductItem>
      {categoryList?.map(({ id, name }) => (
        <StProductItem
          key={id}
          $active={pathname.includes(name)}
          ref={(el) => {
            if (pathname.includes(name)) {
              activeItemRef.current = el;
            }
          }}
        >
          <Link href={`/product/${name}`}>{name}</Link>
        </StProductItem>
      ))}
    </StProductNav>
  );
};

export default ProductNav;

const StProductNav = styled.nav`
  position: sticky;
  top: 6.8rem;

  padding-top: 1.6rem;
  padding-left: 4.4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
  background-color: ${({ theme }) => theme.colors.zw_background};

  z-index: ${({ theme }) => theme.zIndex.zw_tab};
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 340px) {
    display: flex;
    justify-content: space-between;

    padding-right: 4.4rem;
  }

  @media (max-width: 340px) {
    padding-right: 4.4rem;
  }
`;

const StProductItem = styled.button<{ $active: boolean }>`
  padding-bottom: 1.2rem;

  color: ${({ theme }) => theme.colors.zw_lightgray};

  ${({ $active }) =>
    $active &&
    css`
      color: ${({ theme }) => theme.colors.zw_black};
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_black};
    `}
  ${({ theme }) => theme.fonts.zw_price_middle};

  @media (max-width: 340px) {
    & + & {
      margin-left: 2.8rem;
    }
  }
`;
