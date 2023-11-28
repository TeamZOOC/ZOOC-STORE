'use client';

import Link from 'next/link';
import React, { useRef } from 'react';
import { styled } from 'styled-components';

import useOutSideClick from '@/hooks/outside/useOutsideClick';

import { IcCartToast } from '../../../public/icons';

interface CartToastProps {
  isOpenCartToast: boolean;
  handleCartToast: () => void;
}

const CartToast = ({ isOpenCartToast, handleCartToast }: CartToastProps) => {
  const cartToastRef = useRef<HTMLDivElement | null>(null);

  useOutSideClick({ ref: cartToastRef, callback: handleCartToast });

  return (
    <StCartToastWrapper ref={cartToastRef}>
      <StCartToastContainer $fadeout={isOpenCartToast}>
        <IcCartToast />
        <StCartToastTextWrapper>
          <p>장바구니에 상품을 담았어요</p>
          <Link href="/cart">
            <p>장바구니 바로가기</p>
          </Link>
        </StCartToastTextWrapper>
      </StCartToastContainer>
    </StCartToastWrapper>
  );
};

export default CartToast;

const StCartToastWrapper = styled.div`
  position: absolute;
  left: 0.8rem;
  bottom: 6.5rem;

  width: 100%;

  z-index: ${({ theme }) => theme.zIndex.zw_toast};
`;

const StCartToastContainer = styled.div<{ $fadeout: boolean }>`
  position: relative;
`;
const StCartToastTextWrapper = styled.div`
  position: absolute;
  top: 4rem;
  left: 4rem;

  p {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead4};
  }

  p:last-child {
    width: fit-content;
    margin-top: 0.4rem;

    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_point};
    color: ${({ theme }) => theme.colors.zw_point};
    ${({ theme }) => theme.fonts.zw_Body2};
  }
`;
