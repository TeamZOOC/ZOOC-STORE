'use client';

import { styled } from 'styled-components';

const ProductDetail = () => (
  <StProductDetail>
    <StProductDetailTitle>커스텀 젤리 폰케이스</StProductDetailTitle>
    <StProductDetailPrice>
      15,000 <span>원</span>
    </StProductDetailPrice>
    <StProductDetailDesc>
      항상 주머니 속에 넣어 다닐 수 있는 우리 집 강아지 고양이 맞춤 핸드폰
      케이스
    </StProductDetailDesc>
  </StProductDetail>
);

export default ProductDetail;

const StProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-top: 1.4rem;
`;

const StProductDetailTitle = styled.p`
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead2};
`;
const StProductDetailPrice = styled.p`
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_price_big};

  span {
    ${({ theme }) => theme.fonts.zw_price_middle};
  }
`;
const StProductDetailDesc = styled.span`
  color: ${({ theme }) => theme.colors.zw_gray};
  ${({ theme }) => theme.fonts.zw_Body1};
`;
