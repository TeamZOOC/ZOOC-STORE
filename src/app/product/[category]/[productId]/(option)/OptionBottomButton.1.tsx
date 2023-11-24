'use client';
import React from 'react';
import useGetProductDetail from '@/app/product/hooks/useGetProductDetail';
import { cartState } from '@/recoil/cart/atom';
import { selectedOptionsState } from '@/recoil/option/atom';
import { useParams } from 'next/navigation';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { purchaseState } from '@/recoil/purchase/atom';
import {
  OptionBottomButtonProps,
  StOptionBottomButtonContainer,
  StOptionBasketButton,
  StOptionPurchaseButton,
} from './OptionBottomButton';

export const OptionBottomButton = ({
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
