import React from 'react';
import { styled } from 'styled-components';

interface FooterButtonProps {
  status: string;
  text: string;
  activeFunc: React.MouseEventHandler;
}

const FooterButton = ({ status, text, activeFunc }: FooterButtonProps) => (
  <StFooterButton status={status} onClick={activeFunc}>
    {text}
  </StFooterButton>
);

export default FooterButton;

const StFooterButton = styled.button<{ status: string }>`
  width: 100%;
  height: 7.7rem;

  color: ${({ theme }) => theme.colors.zw_white};
  ${({ theme }) => theme.fonts.zw_Subhead1};

  background-color: ${({ theme, status }) =>
    status === 'disabled' ? theme.colors.zw_lightgray : theme.colors.zw_black};
`;
