'use client';

import { ProductItem } from '@/components/product';
import { PRODUCT_LIST } from '@/mocks/productListData';
import { styled } from 'styled-components';

const ProductList = () => (
  <StProductList>
    {PRODUCT_LIST.map((product) => (
      <ProductItem key={product.id} product={product} />
    ))}
  </StProductList>
);

export default ProductList;

const StProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2.8rem;
  column-gap: 1.1rem;

  width: 100%;
  margin-top: 2rem;
`;
