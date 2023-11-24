/* eslint-disable react/no-array-index-key */
import { styled } from 'styled-components';

import OrderProduct from '@/app/mypage/orderlist/(order)/OrderProduct';
import { ProductInfo } from '@/types/order';

interface ProductInfoProps {
  products: ProductInfo[];
}

const ProductsInfo = ({ products }: ProductInfoProps) => (
  <StInfoSection>
    <StInfoTitle>상품 정보</StInfoTitle>
    <StProducts>
      {products.map((product, index) => (
        <OrderProduct key={index} order={product} />
      ))}
    </StProducts>
  </StInfoSection>
);

export default ProductsInfo;

const StInfoSection = styled.div`
  padding: 1.6rem 2.8rem 4rem 2.8rem;
`;

export const StInfoTitle = styled.h2`
  margin-bottom: 2.4rem;

  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead1};
`;

const StProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
