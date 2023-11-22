'use client';

import { selectedOptionsSelector } from '@/recoil/option/selector';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';

interface OptionTotalPriceProps {
  productPrice: number;
}

const OptionTotalPrice = ({ productPrice }: OptionTotalPriceProps) => {
  const selectedOptions = useRecoilValue(selectedOptionsSelector);

  return (
    <StOptionTotalPrice>
      <span>총 상품 금액</span>
      <div>
        <span>{productPrice * selectedOptions}</span>
        <span> 원</span>
      </div>
    </StOptionTotalPrice>
  );
};
export default OptionTotalPrice;
const StOptionTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 4rem;

  color: ${({ theme }) => theme.colors.zw_black};

  & > span {
    ${({ theme }) => theme.fonts.zw_Subhead2};
  }

  & > div > span {
    ${({ theme }) => theme.fonts.zw_price_big};
  }

  & > div > span:last-child {
    ${({ theme }) => theme.fonts.zw_price_middle};
  }
`;
