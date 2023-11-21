'use client';

import { formatPrice } from '@/utils/formatPrice';
import { styled } from 'styled-components';

interface ProductDetailProps {
  productName: string;
  productPrice: number;
  productDesc: string;
}

const ProductDetail = ({
  productName,
  productPrice,
  productDesc,
}: ProductDetailProps) => (
  <StProductDetail>
    <StProductDetailTitle>{productName}</StProductDetailTitle>
    <StProductDetailPrice>
      {formatPrice(productPrice)} <span>원</span>
    </StProductDetailPrice>
    <StProductDetailDesc>{productDesc}</StProductDetailDesc>
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
