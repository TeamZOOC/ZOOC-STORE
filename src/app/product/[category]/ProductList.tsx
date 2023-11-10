'use client';

import { ProductItem } from '@/components/product';
import { PRODUCT_LIST } from '@/mocks/productListData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled } from 'styled-components';

const ProductList = () => {
  const pathname = usePathname();
  return (
    <StProductList>
      {PRODUCT_LIST.map((product) => (
        <Link
          href={`/product/${pathname.slice(9)}/${product.id}`}
          key={product.id}
        >
          <ProductItem product={product} />
        </Link>
      ))}
    </StProductList>
  );
};
export default ProductList;
const StProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2.8rem;
  column-gap: 1.1rem;
  width: 100%;
  margin-top: 2rem;
`;
