'use client';

import React from 'react';
import { styled } from 'styled-components';

interface BottomButtonProps {
  btnType: 'button' | 'submit' | 'reset';
  btnName: string;
  disabled: boolean;
  activeFunc?: React.MouseEventHandler;
}

const BottomButton = ({
  btnType,
  btnName,
  disabled,
  activeFunc,
}: BottomButtonProps) => (
  <StBottomButtonWrapper>
    <StBottomButton type={btnType} $disabled={disabled} onClick={activeFunc}>
      {btnName}
    </StBottomButton>
  </StBottomButtonWrapper>
);

export default BottomButton;

const StBottomButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;

  width: 100%;
  z-index: 10;
`;

const StBottomButton = styled.button<{ $disabled: boolean }>`
  width: 100%;
  max-width: 43rem;
  height: 7.7rem;

  color: ${({ theme }) => theme.colors.zw_white};
  ${({ theme }) => theme.fonts.zw_Subhead1};

  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.zw_lightgray : theme.colors.zw_black};
`;
