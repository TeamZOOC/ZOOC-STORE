import React from 'react';
import { styled } from 'styled-components';

interface BottomButtonProps {
  btnType: 'button' | 'submit' | 'reset';
  btnName: string;
  disabled: boolean;
  activeFunc: React.MouseEventHandler;
}

const BottomButton = ({
  btnType,
  btnName,
  disabled,
  activeFunc,
}: BottomButtonProps) => (
  <StBottomButton type={btnType} disabled={disabled} onClick={activeFunc}>
    {btnName}
  </StBottomButton>
);

export default BottomButton;

const StBottomButton = styled.button`
  width: 100%;
  height: 7.7rem;

  color: ${({ theme }) => theme.colors.zw_white};
  ${({ theme }) => theme.fonts.zw_Subhead1};

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.zw_lightgray : theme.colors.zw_black};
`;
