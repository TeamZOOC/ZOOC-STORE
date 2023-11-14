/* eslint-disable react/no-array-index-key */

'use client';

import { cartInfo } from '@/types/cart';
import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';
import { IcMinus, IcPlus, IcProductDelete } from '../../../public/icons';

interface cartItemProps {
  cart: cartInfo;
}

const ShoppingCartItem = ({ cart }: cartItemProps) => {
  const {
    imgSrc,
    imgAlt,
    productTitle,
    productSalePercent,
    productPrice,
    option,
    quantity,
  } = cart;
  return (
    <StShoppingCartItem>
      <StShoppingCartMain>
        <StShoppingCartImage>
          <Image src={imgSrc} alt={imgAlt} width={100} height={135} />
        </StShoppingCartImage>
        <StShoppingCartInfo>
          <div>
            <StCartItemTitle>{productTitle}</StCartItemTitle>
            <StCartItemPriceBox>
              {productSalePercent && (
                <StCartItemSalePercent>
                  {productSalePercent}
                </StCartItemSalePercent>
              )}
              <StCartItemPrice>{productPrice}</StCartItemPrice>
            </StCartItemPriceBox>
          </div>
          <StShoppingCartOption>
            {option.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </StShoppingCartOption>
          <StCartItemQuantity>
            <StOptionItemQuantityControlButton type="button">
              <IcMinus />
            </StOptionItemQuantityControlButton>
            <span>{quantity}</span>
            <StOptionItemQuantityControlButton type="button">
              <IcPlus />
            </StOptionItemQuantityControlButton>
          </StCartItemQuantity>
        </StShoppingCartInfo>
      </StShoppingCartMain>
      <IcProductDelete />
    </StShoppingCartItem>
  );
};

export default ShoppingCartItem;

const StShoppingCartItem = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  & + & {
    margin-top: 4rem;
  }
`;

const StShoppingCartMain = styled.div`
  display: flex;
  gap: 2rem;

  width: 100%;
`;

const StShoppingCartImage = styled.div`
  position: relative;

  aspect-ratio: 1/1.35;
`;

const StShoppingCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.1rem;
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

const StShoppingCartOption = styled.div`
  display: flex;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1; // 원하는 라인수
  -webkit-box-orient: vertical;

  span {
    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body1};
  }

  span::after {
    content: '|';
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  span:last-child {
    &::after {
      content: '';
    }
  }
`;

const StCartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  span {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_price_middle};
  }
`;
const StOptionItemQuantityControlButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.zw_lightgray};
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.zw_background};
`;
