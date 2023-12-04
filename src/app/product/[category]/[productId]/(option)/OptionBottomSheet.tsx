/* eslint-disable react/no-array-index-key */

'use client';

import React from 'react';
import { useRecoilValue } from 'recoil';
import { css, styled } from 'styled-components';

import { selectedOptionsState } from '@/recoil/option/atom';
import { slideInFromBottom, slideInFromTop } from '@/styles/animation/slide';

import OptionBottomButton from './OptionBottomButton';
import OptionSelectItem from './OptionSelectItem';
import OptionSelector from './OptionSelector';
import OptionTotalPrice from './OptionTotalPrice';

interface OptionBottomSheetProps {
  isUnMount: boolean;
  isOptionToggle: boolean;
  bottomSheetRef: React.RefObject<HTMLDivElement>;
  productPrice: number;
  handleToggleOption: () => void;
  handleCartToast: () => void;
}
const OptionBottomSheet = ({
  isUnMount,
  isOptionToggle,
  bottomSheetRef,
  handleToggleOption,
  productPrice,
  handleCartToast,
}: OptionBottomSheetProps) => {
  const selectedOptions = useRecoilValue(selectedOptionsState);

  return (
    <StOptionBottomSheet
      ref={bottomSheetRef}
      $animationUp={isOptionToggle}
      $isUnMount={isUnMount}
    >
      <StOptionBottomSheetInner $position="top">
        <StOptionBottomSheetTopBorderWrapper>
          <StOptionBottomSheetTopBorder />
        </StOptionBottomSheetTopBorderWrapper>
        <OptionSelector />
        <StOptionSelectedItemWrapper>
          {selectedOptions.map((selected, index) => (
            <OptionSelectItem
              key={index}
              selectedIndex={index}
              selected={selected}
            />
          ))}
        </StOptionSelectedItemWrapper>
      </StOptionBottomSheetInner>
      {selectedOptions.length > 0 && <StHr />}
      <StOptionBottomSheetInner $position="bottom">
        {selectedOptions.length > 0 && (
          <OptionTotalPrice productPrice={productPrice} />
        )}
        <OptionBottomButton
          handleToggleOption={handleToggleOption}
          handleCartToast={handleCartToast}
        />
      </StOptionBottomSheetInner>
    </StOptionBottomSheet>
  );
};
export default OptionBottomSheet;

const StOptionBottomSheet = styled.div<{
  $isUnMount: boolean;
  $animationUp: boolean;
}>`
  position: absolute;
  bottom: 0;

  width: 100%;
  max-width: 43rem;

  border-radius: 0.6rem 0.6rem 0 0;
  background-color: ${({ theme }) => theme.colors.zw_background};

  ${({ $animationUp }) =>
    $animationUp &&
    css`
      animation: ${slideInFromBottom} 0.5s ease-in-out;
    `};

  ${({ $isUnMount }) =>
    !$isUnMount &&
    css`
      animation: ${slideInFromTop} 0.5s ease-in-out;
    `};
`;
const StOptionBottomSheetInner = styled.div<{ $position: string }>`
  width: 100%;
  ${({ $position }) =>
    $position === 'top'
      ? css`
          padding: 1.2rem 2.8rem 0 2.8rem;
        `
      : css`
          padding: 0 2.8rem 2.8rem 2.8rem;
        `}
`;
const StHr = styled.div`
  height: 0.1rem;
  margin: 3.5rem 0 3.1rem 2.8rem;
  background-color: ${({ theme }) => theme.colors.zw_brightgray};
`;
const StOptionSelectedItemWrapper = styled.div`
  margin-top: 4rem;
`;

const StOptionBottomSheetTopBorderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 2.8rem;
`;

const StOptionBottomSheetTopBorder = styled.div`
  width: 5rem;
  height: 0.4rem;

  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.zw_brightgray};
`;
