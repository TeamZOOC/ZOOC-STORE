'use client';

import { styled } from 'styled-components';
import { ProductInfoResponse } from '@/types/product';
import { formatPrice } from '@/utils/formatPrice';
import { useRouter } from 'next/navigation';

interface ProductItemProps {
  product: ProductInfoResponse;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const router = useRouter();
  const { id, name, sale, price } = product;

  return (
    <StProductItem onClick={() => router.push(`/product/all/${id}`)}>
      <StProductImage>
        {/* <Image src={imgSrc} alt={imgAlt} fill /> */}
      </StProductImage>
      <StProductTitle>{name}</StProductTitle>
      <StProductPriceBox>
        {sale && <StProductSalePercent>{sale}%</StProductSalePercent>}
        <StProductPrice>{formatPrice(price)}</StProductPrice>
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

const StProductTitle = styled.p`
  margin-top: 1rem;
  margin-bottom: 0.4rem;

  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead3};

  text-align: left;
`;

const StProductPriceBox = styled.div`
  display: flex;
  gap: 0.4rem;
`;
const StProductPrice = styled.span`
  color: ${({ theme }) => theme.colors.zw_darkgray};
  ${({ theme }) => theme.fonts.zw_price_middle};
`;
const StProductSalePercent = styled(StProductPrice)`
  color: ${({ theme }) => theme.colors.zw_point};
`;
