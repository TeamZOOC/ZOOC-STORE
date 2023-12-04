/* eslint-disable react/no-array-index-key */

'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { css, styled } from 'styled-components';

import { BottomButton } from '@/components/button';
import { MainLayout } from '@/components/layout';
import CartToast from '@/components/toast/CartToast';
import { TAB_LIST } from '@/constants/productTab';
import useOutSideClick from '@/hooks/outside/useOutsideClick';
import useTab from '@/hooks/tab/useTab';

import {
  ImageCarouselSecond,
  ImageCarouselText,
} from '../../../../../public/images';
import OptionBottomSheet from './(option)/OptionBottomSheet';
import OptionBottomSheetContainer from './(option)/OptionBottomSheetContainer';

interface ProductInfoNavProps {
  productPrice: number;
  productDetailImage: string;
}

const ProductInfoNav = ({
  productPrice,
  productDetailImage,
}: ProductInfoNavProps) => {
  const { activeTab, setActiveTab } = useTab({
    tabList: TAB_LIST,
    defaultTabIndex: 0,
  });
  const bottomSheetRef = useRef<HTMLDivElement | null>(null);
  const [isOptionToggle, setIsOptionToggle] = useState(false);
  const [isUnMount, setIsUnMount] = useState(false);
  const [isOpenCartToast, setIsOpenCartToast] = useState(false);
  const [imageRatio, setImageRatio] = useState('');
  const { productId } = useParams();

  useEffect(() => {
    if (Number(productId) >= 10 && Number(productId) <= 13) {
      setImageRatio('oneSeven');
    } else {
      setImageRatio('oneTwelve');
    }
  }, [productId]);

  // const handleToggleOption = () => {
  //   setIsOptionToggle(true);
  //   setIsUnMount((prev) => !prev);
  // };

  const handleToggleOption = () => {
    if (isOptionToggle) {
      setIsUnMount(!isUnMount);
      setTimeout(() => {
        setIsOptionToggle(!isOptionToggle);
      }, 500);
      return;
    }

    setIsOptionToggle(!isOptionToggle);
    setIsUnMount(!isUnMount);
  };

  // const handleAnimationEnd = () => {
  //   if (isUnMount) {
  //     return;
  //   }

  //   setIsOptionToggle(false);
  // };

  const handleCartToast = () => {
    setIsOpenCartToast((prev) => !prev);
  };

  useOutSideClick({ ref: bottomSheetRef, callback: handleToggleOption });

  return (
    <>
      <StCartToast>
        {isOpenCartToast && (
          <CartToast
            handleCartToast={handleCartToast}
            isOpenCartToast={isOpenCartToast}
          />
        )}
      </StCartToast>
      <StProductInfoNav>
        {TAB_LIST.map((tab, index) => (
          <StProductInfoNavItem
            key={index}
            $active={activeTab === tab}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </StProductInfoNavItem>
        ))}
      </StProductInfoNav>
      <MainLayout>
        <StProductInfoEmptySpace />
        {activeTab === '상품설명' && (
          <>
            {Number(productId) === 14 && (
              <StProductCaseGif>
                <Image
                  src={ImageCarouselText}
                  alt="두번째 이미지 텍스트"
                  fill
                  style={{ position: 'absolute', zIndex: 1 }}
                  sizes="100vw"
                />
                <Image src={ImageCarouselSecond} alt="두번째 이미지" fill />
              </StProductCaseGif>
            )}
            <StProductInfoImage $imageRatio={imageRatio}>
              <Image
                src={productDetailImage}
                alt="상품 상세 디테일 이미지"
                fill
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,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"
              />
            </StProductInfoImage>
          </>
        )}
        {activeTab === '배송정보' && (
          <StProductShippingInfoWrapper>
            <StProductShippingInfo>
              <span>배송비</span>
              <div>
                <p>0 원</p>
              </div>
            </StProductShippingInfo>
            <StProductShippingInfo>
              <span>배송기간</span>
              <p>평균 7 - 10일 이내 도착</p>
            </StProductShippingInfo>
          </StProductShippingInfoWrapper>
        )}
      </MainLayout>
      <StBottomButton>
        <BottomButton
          btnType="button"
          btnName="구매하기"
          disabled={false}
          activeFunc={handleToggleOption}
        />
      </StBottomButton>
      {isOptionToggle && (
        <OptionBottomSheetContainer>
          <OptionBottomSheet
            isUnMount={isUnMount}
            isOptionToggle={isOptionToggle}
            bottomSheetRef={bottomSheetRef}
            productPrice={productPrice}
            handleToggleOption={handleToggleOption}
            handleCartToast={handleCartToast}
          />
        </OptionBottomSheetContainer>
      )}
    </>
  );
};
export default ProductInfoNav;

const StCartToast = styled.div`
  width: 100%;
  max-width: 43rem;

  position: absolute;
  bottom: 0rem;
`;

const StProductInfoNav = styled.nav`
  position: sticky;
  top: 6.8rem;

  margin-top: 4.5rem;
  margin-left: 2.8rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_brightgray};
  background-color: ${({ theme }) => theme.colors.zw_background};

  z-index: 5;
`;
const StProductInfoNavItem = styled.button<{ $active: boolean }>`
  padding-bottom: 1.2rem;

  color: ${({ theme }) => theme.colors.zw_lightgray};
  ${({ theme }) => theme.fonts.zw_Body1};
  ${({ $active }) =>
    $active &&
    css`
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_black};
      color: ${({ theme }) => theme.colors.zw_black};
      ${({ theme }) => theme.fonts.zw_Subhead3};
    `}
  & + & {
    margin-left: 3.2rem;
  }
`;
const StProductInfoEmptySpace = styled.div`
  height: 1.4rem;

  background-color: transparent;
`;
const StProductInfoImage = styled.div<{ $imageRatio: string }>`
  position: relative;
  width: 100%;

  ${({ $imageRatio }) =>
    $imageRatio === 'oneSeven'
      ? css`
          aspect-ratio: 1/7;
        `
      : css`
          aspect-ratio: 1/11;
        `}
`;
const StProductShippingInfoWrapper = styled.div`
  height: 26.2rem;
`;
const StProductShippingInfo = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;

  ${({ theme }) => theme.fonts.zw_Body2};
  & > span {
    color: ${({ theme }) => theme.colors.zw_gray};
  }
  & > p {
    color: ${({ theme }) => theme.colors.zw_black};
  }
  & + & {
    margin-top: 1.8rem;
  }
`;

const StProductCaseGif = styled.div`
  position: relative;

  width: 100%;
  margin-bottom: 1.015rem;

  aspect-ratio: 1/1.53;
`;

const StBottomButton = styled.div`
  position: sticky;
  bottom: 0;
`;
