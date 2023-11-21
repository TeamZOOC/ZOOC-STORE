'use client';

import { MainLayout } from '@/components/layout';
import { useRecoilState } from 'recoil';
import { productOptionState } from '@/recoil/product/atom';
import { useEffect } from 'react';
import ProductImage from './ProductImage';
import ProductDetail from './ProductDetail';
import ProductInfoNav from './ProductInfoNav';
import useGetProductDetail from '../../hooks/useGetProductDetail';

interface ProductDetailContainerProps {
  pageParams: number;
}

const ProductDetailContainer = ({
  pageParams,
}: ProductDetailContainerProps) => {
  const [, setProductOption] = useRecoilState(productOptionState);
  const { productDetail } = useGetProductDetail(pageParams);

  useEffect(() => {
    if (productDetail) {
      setProductOption(productDetail?.optionCategories);
    }
  }, [productDetail]);

  return (
    <>
      <ProductImage />
      <MainLayout>
        {productDetail && (
          <ProductDetail
            productName={productDetail.name}
            productPrice={productDetail.price}
            productDesc={productDetail.description}
          />
        )}
      </MainLayout>
      <ProductInfoNav />
    </>
  );
};
export default ProductDetailContainer;
