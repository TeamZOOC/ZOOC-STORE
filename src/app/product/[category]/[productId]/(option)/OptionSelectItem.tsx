'use client';

import { styled } from 'styled-components';
import {
  IcMinus,
  IcPlus,
  IcProductDelete,
} from '../../../../../../public/icons';

const OptionSelectItem = () => (
  <StOptionSelectItem>
    <StOptionSelectItemLeft>
      <IcProductDelete />
      <span>아이폰 12 플러스</span>
    </StOptionSelectItemLeft>
    <StOptionSelectItemRight>
      <StOptionItemQuantityControlButton type="button">
        <IcMinus />
      </StOptionItemQuantityControlButton>
      <span>1</span>
      <StOptionItemQuantityControlButton type="button">
        <IcPlus />
      </StOptionItemQuantityControlButton>
    </StOptionSelectItemRight>
  </StOptionSelectItem>
);
export default OptionSelectItem;
const StOptionSelectItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & + & {
    margin-top: 3.4rem;
  }
`;
const StOptionSelectItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  span {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
`;
const StOptionSelectItemRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  span {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_price_middle};
  }
`;
const StOptionItemQuantityControlButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.zw_lightgray};
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.zw_background};
`;
