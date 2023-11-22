'use client';

import { ProductItem } from '@/components/product';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { styled } from 'styled-components';
import useGetProduct from '../hooks/useGetProduct';

const ProductList = () => {
  const pathname = usePathname();
  const { category } = useParams();
  const { productList } = useGetProduct(category as string);

  return (
    <StProductList>
      {productList?.map((product) => (
        <Link href={`${pathname}/${product.id}`} key={product.id}>
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
