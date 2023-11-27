'use client';

import Image from 'next/image';
import { styled } from 'styled-components';

interface ProductImageProps {
  productImage: string;
}

const ProductImage = ({ productImage }: ProductImageProps) => (
  <StProductImage>
    <Image src={productImage} alt="제품 상세" layout="fill" />
  </StProductImage>
);

export default ProductImage;

const StProductImage = styled.div`
  position: relative;
  width: 100%;

  aspect-ratio: 1/1;

  background-color: #e2e2e2;
`;
