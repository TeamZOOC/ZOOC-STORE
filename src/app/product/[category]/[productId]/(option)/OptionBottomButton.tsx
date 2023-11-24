'use client';

import { css, styled } from 'styled-components';
import { OptionBottomButton } from './OptionBottomButton.1';

export interface OptionBottomButtonProps {
  handleToggleOption: () => void;
}

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
