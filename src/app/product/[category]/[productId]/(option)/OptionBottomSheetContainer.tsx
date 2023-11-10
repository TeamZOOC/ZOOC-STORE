'use client';

import React from 'react';
import { styled } from 'styled-components';

interface OptionBottomSheetContainerProps {
  children: React.ReactNode;
}
const OptionBottomSheetContainer = ({
  children,
}: OptionBottomSheetContainerProps) => (
  <StOptionBottomSheetContainer>{children}</StOptionBottomSheetContainer>
);
export default OptionBottomSheetContainer;
const StOptionBottomSheetContainer = styled.div`
  z-index: ${({ theme }) => theme.zIndex.zw_modal};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;
