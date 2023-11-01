'use client';

import { ProductInfo } from '@/types/product';
import { styled } from 'styled-components';

const HomeProductItem = ({ product }: { product: ProductInfo }) => {
  const { newProduct, productTitle, productSalePercent, productPrice } =
    product;
  return (
    <StHomeProductItem>
      <StHomeProductImage>
        {newProduct && <StHomeSaleTicker>NEW</StHomeSaleTicker>}
      </StHomeProductImage>
      <StHomeProductTitle>{productTitle}</StHomeProductTitle>
      <StHomeProductPriceBox>
        {productSalePercent && (
          <StHomeProductSalePercent>
            {productSalePercent}
          </StHomeProductSalePercent>
        )}
        <StHomeProductPrice>{productPrice}</StHomeProductPrice>
      </StHomeProductPriceBox>
    </StHomeProductItem>
  );
};

export default HomeProductItem;

const StHomeProductItem = styled.div`
  width: 100%;
`;

const StHomeProductImage = styled.div`
  position: relative;

  width: 100%;
  height: 13.5rem;

  background-color: #eaeaea;
`;

const StHomeSaleTicker = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem 0.8rem;

  background-color: ${({ theme }) => theme.colors.zw_point};
  color: ${({ theme }) => theme.colors.zw_white};
  font-family: NanumGothic;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.314px;
`;

const StHomeProductTitle = styled.p`
  margin-top: 1rem;
  margin-bottom: 0.4rem;

  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead4};
`;

const StHomeProductPriceBox = styled.div`
  display: flex;
  gap: 0.4rem;
`;
const StHomeProductPrice = styled.span`
  color: ${({ theme }) => theme.colors.zw_darkgray};
  ${({ theme }) => theme.fonts.zw_price_small};
`;
const StHomeProductSalePercent = styled(StHomeProductPrice)`
  color: ${({ theme }) => theme.colors.zw_point};
`;
