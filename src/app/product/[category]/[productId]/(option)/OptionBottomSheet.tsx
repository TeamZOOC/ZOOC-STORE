/* eslint-disable react/no-array-index-key */

'use client';

import React from 'react';
import { styled, css } from 'styled-components';
import { slideInFromBottom, slideInFromTop } from '@/styles/animation/slide';
import { useRecoilValue } from 'recoil';
import { selectedOptionsState } from '@/recoil/option/atom';
import OptionSelector from './OptionSelector';
import OptionBottomButton from './OptionBottomButton.1';
import OptionSelectItem from './OptionSelectItem';
import OptionTotalPrice from './OptionTotalPrice';

interface OptionBottomSheetProps {
  isUnMount: boolean;
  isOptionToggle: boolean;
  bottomSheetRef: React.RefObject<HTMLDivElement>;
  productPrice: number;
  handleAnimationEnd: () => void;
  handleToggleOption: () => void;
}
const OptionBottomSheet = ({
  isUnMount,
  isOptionToggle,
  bottomSheetRef,
  handleToggleOption,
  handleAnimationEnd,
  productPrice,
}: OptionBottomSheetProps) => {
  const selectedOptions = useRecoilValue(selectedOptionsState);

  return (
    <StOptionBottomSheet
      ref={bottomSheetRef}
      $animationUp={isOptionToggle}
      $isUnMount={isUnMount}
      onAnimationEnd={handleAnimationEnd}
    >
      <StOptionBottomSheetInner $position="top">
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
      <StHr />
      <StOptionBottomSheetInner $position="bottom">
        {selectedOptions.length > 0 && (
          <OptionTotalPrice productPrice={productPrice} />
        )}
        <OptionBottomButton handleToggleOption={handleToggleOption} />
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
          padding: 4.4rem 2.8rem 0 2.8rem;
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
