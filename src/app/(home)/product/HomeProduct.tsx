'use client';

import { styled } from 'styled-components';
import { PRODUCT_LIST } from '@/mocks/productListData';
import { ProductItem } from '@/components/product';

const HomeProduct = () => (
  <StHomeProduct>
    {PRODUCT_LIST.map((product) => (
      <ProductItem key={product.id} product={product} />
    ))}
  </StHomeProduct>
);

export default HomeProduct;

const StHomeProduct = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.9rem;

  width: 100%;
  margin-top: 2rem;
`;
