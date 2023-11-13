'use client';

import { cartInfo } from '@/types/cart';
import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';

interface cartItemProps {
  cart: cartInfo;
}

const ShoppingCartItem = ({ cart }: cartItemProps) => {
  const { imgSrc, imgAlt, productTitle, productSalePercent, productPrice } =
    cart;
  return (
    <StShoppingCartItem>
      <StShoppingCartImage>
        <Image src={imgSrc} alt={imgAlt} fill />
      </StShoppingCartImage>
      <div>
        <StCartItemTitle>{productTitle}</StCartItemTitle>
        <StCartItemPriceBox>
          {productSalePercent && (
            <StCartItemSalePercent>{productSalePercent}</StCartItemSalePercent>
          )}
          <StCartItemPrice>{productPrice}</StCartItemPrice>
        </StCartItemPriceBox>
      </div>
    </StShoppingCartItem>
  );
};

export default ShoppingCartItem;

const StShoppingCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  width: 100%;

  & + & {
    margin-top: 4rem;
  }
`;

const StShoppingCartImage = styled.div`
  position: relative;

  aspect-ratio: 1/1.35;
`;

const StCartItemTitle = styled.p`
  margin-bottom: 0.6rem;

  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead3}
`;

const StCartItemPriceBox = styled.div`
  display: flex;
  gap: 0.6rem;
`;
const StCartItemPrice = styled.span`
  color: ${({ theme }) => theme.colors.zw_darkgray};
  ${({ theme }) => theme.fonts.zw_price_middle};
`;
const StCartItemSalePercent = styled(StCartItemPrice)`
  color: ${({ theme }) => theme.colors.zw_point};
`;
