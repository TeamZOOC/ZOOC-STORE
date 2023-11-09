'use client';

import { styled } from 'styled-components';
import Image, { StaticImageData } from 'next/image';

interface ProductInfo {
  newProduct: boolean;
  imgSrc: StaticImageData;
  imgAlt: string;
  productTitle: string;
  productSalePercent?: string;
  productPrice: string;
}

const ProductItem = ({ product }: { product: ProductInfo }) => {
  const {
    newProduct,
    imgSrc,
    imgAlt,
    productTitle,
    productSalePercent,
    productPrice,
  } = product;
  return (
    <StProductItem>
      <StProductImage>
        <Image src={imgSrc} alt={imgAlt} fill />
        {newProduct && <StSaleTicker>NEW</StSaleTicker>}
      </StProductImage>
      <StProductTitle>{productTitle}</StProductTitle>
      <StProductPriceBox>
        {productSalePercent && (
          <StProductSalePercent>{productSalePercent}</StProductSalePercent>
        )}
        <StProductPrice>{productPrice}</StProductPrice>
      </StProductPriceBox>
    </StProductItem>
  );
};

export default ProductItem;

const StProductItem = styled.button`
  width: 100%;
  aspect-ratio: 1/1.35;
`;

const StProductImage = styled.div`
  position: relative;

  aspect-ratio: 1/1.35;

  background-color: #eaeaea;
`;

const StSaleTicker = styled.div`
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

const StProductTitle = styled.p`
  margin-top: 1rem;
  margin-bottom: 0.4rem;

  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead4};

  text-align: left;
`;

const StProductPriceBox = styled.div`
  display: flex;
  gap: 0.4rem;
`;
const StProductPrice = styled.span`
  color: ${({ theme }) => theme.colors.zw_darkgray};
  ${({ theme }) => theme.fonts.zw_price_small};
`;
const StProductSalePercent = styled(StProductPrice)`
  color: ${({ theme }) => theme.colors.zw_point};
`;
