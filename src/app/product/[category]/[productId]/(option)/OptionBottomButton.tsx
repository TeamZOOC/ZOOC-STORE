'use client';
import React from 'react';
import useGetProductDetail from '@/app/product/hooks/useGetProductDetail';
import { cartState } from '@/recoil/cart/atom';
import { selectedOptionsState } from '@/recoil/option/atom';
import { useParams } from 'next/navigation';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { purchasePriceState, purchaseState } from '@/recoil/purchase/atom';
import { css, styled } from 'styled-components';

export interface OptionBottomButtonProps {
  handleToggleOption: () => void;
}

const OptionBottomButton = ({
  handleToggleOption,
}: OptionBottomButtonProps) => {
  const { productId } = useParams();
  const [, setCart] = useRecoilState(cartState);
  const [, setPurchase] = useRecoilState(purchaseState);
  const resetPurchase = useResetRecoilState(purchaseState);
  const resetPurchasePrice = useResetRecoilState(purchasePriceState);
  const selectedOption = useRecoilValue(selectedOptionsState);
  const { productDetail } = useGetProductDetail(Number(productId));

  const handleSaveCart = () => {
    if (productDetail) {
      setCart((prevCart) => {
        // selectedOption의 길이에 따라 다른 로직 실행
        if (selectedOption.length === 1) {
          // 길이가 1일 경우, 단일 항목 추가
          return [
            ...prevCart,
            {
              id: productDetail.id,
              image: productDetail.image,
              name: productDetail.name,
              price: productDetail.price,
              sale: productDetail.sale,
              optionList: selectedOption[0],
            },
          ];
        }
        if (selectedOption.length === 2) {
          // 길이가 2일 경우, 각 옵션에 대해 별도의 항목 추가
          return [
            ...prevCart,
            ...selectedOption.map((option) => ({
              id: productDetail.id,
              image: productDetail.image,
              name: productDetail.name,
              price: productDetail.price,
              sale: productDetail.sale,
              optionList: option,
            })),
          ];
        }
        // selectedOption의 길이가 1도 2도 아닐 경우, 카트를 변경하지 않음
        return prevCart;
      });
    }
    handleToggleOption();
  };

  const handlePurchaseItem = () => {
    resetPurchase();
    resetPurchasePrice();
    if (productDetail) {
      setPurchase((prevPurchase) => {
        // selectedOption의 길이에 따라 다른 로직 실행
        if (selectedOption.length === 1) {
          // 길이가 1일 경우, 단일 항목 추가
          return [
            ...prevPurchase,
            {
              id: productDetail.id,
              image: productDetail.image,
              name: productDetail.name,
              price: productDetail.price,
              sale: productDetail.sale,
              optionList: selectedOption[0],
            },
          ];
        }
        if (selectedOption.length === 2) {
          // 길이가 2일 경우, 각 옵션에 대해 별도의 항목 추가
          return [
            ...prevPurchase,
            ...selectedOption.map((option) => ({
              id: productDetail.id,
              image: productDetail.image,
              name: productDetail.name,
              price: productDetail.price,
              sale: productDetail.sale,
              optionList: option,
            })),
          ];
        }
        // selectedOption의 길이가 1도 2도 아닐 경우, 카트를 변경하지 않음
        return prevPurchase;
      });
    }
  };

  return (
    <StOptionBottomButtonContainer>
      <StOptionBasketButton
        type="button"
        $active={selectedOption.length > 0}
        onClick={handleSaveCart}
      >
        장바구니
      </StOptionBasketButton>
      <StOptionPurchaseButton
        type="button"
        $active={selectedOption.length > 0}
        onClick={handlePurchaseItem}
      >
        구매하기
      </StOptionPurchaseButton>
    </StOptionBottomButtonContainer>
  );
};

export default OptionBottomButton;

export const StOptionBottomButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 3.5fr 6.5fr;
  gap: 0.9rem;
`;
const StOptionBottomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2.2rem 0 2.4rem 0;

  border-radius: 0.2rem;
  ${({ theme }) => theme.fonts.zw_Subhead1};

  box-shadow: 0 0 1.5rem 0 rgba(0, 0, 0, 0.06);
`;
export const StOptionBasketButton = styled(StOptionBottomButton)<{
  $active: boolean;
}>`
  background-color: ${({ theme }) => theme.colors.zw_background};

  transition: all 0.2s;

  ${({ $active }) =>
    $active
      ? css`
          border: 0.1rem solid ${({ theme }) => theme.colors.zw_black};
          color: ${({ theme }) => theme.colors.zw_black};
        `
      : css`
          border: 0.1rem solid ${({ theme }) => theme.colors.zw_lightgray};
          color: ${({ theme }) => theme.colors.zw_lightgray};
        `}
`;

export const StOptionPurchaseButton = styled(StOptionBottomButton)<{
  $active: boolean;
}>`
  transition: all 0.2s;

  ${({ $active }) =>
    $active
      ? css`
          background-color: ${({ theme }) => theme.colors.zw_black};
          color: ${({ theme }) => theme.colors.zw_white};
        `
      : css`
          background-color: ${({ theme }) => theme.colors.zw_lightgray};
          color: ${({ theme }) => theme.colors.zw_white};
        `}
`;
