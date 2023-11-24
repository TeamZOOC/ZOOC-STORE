/* eslint-disable react/no-array-index-key */

'use client';

import React from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

import { useModal } from '@/hooks/modal';
import { cartState } from '@/recoil/cart/atom';
import { CartInfo } from '@/types/cart';
import { formatPrice } from '@/utils/formatPrice';

import { IcMinus, IcPlus, IcProductDelete } from '../../../public/icons';

interface cartItemProps {
  cartItem: CartInfo;
  selectedIndex: number;
}

const ShoppingCartItem = ({ cartItem, selectedIndex }: cartItemProps) => {
  const { name, price, sale, optionList } = cartItem;
  const [cart, setCart] = useRecoilState(cartState);
  const { openModal } = useModal();

  const handleDeleteCartItem = () => {
    openModal('cartDelete', {
      selectedIndex,
    });
  };

  const handleIncreaseQuantity = () => {
    // cart 배열의 복사본을 생성합니다.
    const updatedCart = [...cart];

    // 첫 번째 원소의 optionList 배열의 첫 번째 원소의 quantity를 1 증가시킵니다.

    updatedCart[selectedIndex] = {
      ...updatedCart[selectedIndex],
      optionList: [
        {
          ...updatedCart[selectedIndex].optionList[0],
          pieces: updatedCart[selectedIndex].optionList[0].pieces + 1,
        },
        ...updatedCart[selectedIndex].optionList.slice(1), // 나머지 optionList 원소들을 추가합니다.
      ],
    };

    setCart(updatedCart);
  };
  const handleDecreaseQuantity = () => {
    if (cart[selectedIndex].optionList[0].pieces === 1) return;
    // cart 배열의 복사본을 생성합니다.
    const updatedCart = [...cart];

    // 첫 번째 원소의 optionList 배열의 첫 번째 원소의 quantity를 1 증가시킵니다.

    updatedCart[selectedIndex] = {
      ...updatedCart[selectedIndex],
      optionList: [
        {
          ...updatedCart[selectedIndex].optionList[0],
          pieces: updatedCart[selectedIndex].optionList[0].pieces - 1,
        },
        ...updatedCart[selectedIndex].optionList.slice(1), // 나머지 optionList 원소들을 추가합니다.
      ],
    };

    setCart(updatedCart);
  };

  return (
    <StShoppingCartItem>
      <StShoppingCartMain>
        <StShoppingCartImage />
        <StShoppingCartInfo>
          <div>
            <StCartItemTitle>{name}</StCartItemTitle>
            <StCartItemPriceBox>
              {sale && <StCartItemSalePercent>{sale}</StCartItemSalePercent>}
              <StCartItemPrice>{formatPrice(price)}</StCartItemPrice>
            </StCartItemPriceBox>
          </div>
          <StShoppingCartOption>
            {optionList.map((option, index) => (
              <span key={index}>{option.name}</span>
            ))}
          </StShoppingCartOption>
          <StCartItemQuantity>
            <StOptionItemQuantityControlButton
              type="button"
              onClick={handleDecreaseQuantity}
            >
              <IcMinus />
            </StOptionItemQuantityControlButton>
            <span>{optionList[0].pieces}</span>
            <StOptionItemQuantityControlButton
              type="button"
              onClick={handleIncreaseQuantity}
            >
              <IcPlus />
            </StOptionItemQuantityControlButton>
          </StCartItemQuantity>
        </StShoppingCartInfo>
      </StShoppingCartMain>
      <IcProductDelete onClick={handleDeleteCartItem} />
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

  width: 10rem;
  height: 13rem;

  aspect-ratio: 1/1.35;

  background-color: ${({ theme }) => theme.colors.zw_lightgray};
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
