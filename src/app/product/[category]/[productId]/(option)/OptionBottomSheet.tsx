'use client';

import React from 'react';
import { styled, css } from 'styled-components';
import { slideInFromBottom } from '@/styles/animation/slide';
import OptionSelector from './OptionSelector';
import OptionBottomButton from './OptionBottomButton';
import OptionSelectItem from './OptionSelectItem';
import OptionTotalPrice from './OptionTotalPrice';

interface OptionBottomSheetProps {
  bottomSheetRef: React.RefObject<HTMLDivElement>;
}
const OptionBottomSheet = ({ bottomSheetRef }: OptionBottomSheetProps) => (
  <StOptionBottomSheet ref={bottomSheetRef}>
    <StOptionBottomSheetInner $position="top">
      <OptionSelector />
      <OptionSelectItem />
      {/* <OptionSelectItem />
        <OptionSelectItem /> */}
    </StOptionBottomSheetInner>
    <StHr />
    <StOptionBottomSheetInner $position="bottom">
      <OptionTotalPrice />
      <OptionBottomButton />
    </StOptionBottomSheetInner>
  </StOptionBottomSheet>
);
export default OptionBottomSheet;

const StOptionBottomSheet = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 0.6rem 0.6rem 0 0;
  background-color: ${({ theme }) => theme.colors.zw_background};

  animation: ${slideInFromBottom} 0.5s ease-in-out;
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
