'use client';

import { MainLayout } from '@/components/layout';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { productOptionState } from '@/recoil/product/atom';
import { useEffect } from 'react';
import { selectedOptionsState } from '@/recoil/option/atom';
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
  const resetSelectedOption = useResetRecoilState(selectedOptionsState);
  const [, setProductOption] = useRecoilState(productOptionState);
  const { productDetail } = useGetProductDetail(pageParams);

  useEffect(() => {
    resetSelectedOption();
    if (productDetail) {
      setProductOption(productDetail?.optionCategories);
    }
  }, [productDetail]);

  return (
    productDetail && (
      <>
        <ProductImage />
        <MainLayout>
          <ProductDetail
            productName={productDetail.name}
            productPrice={productDetail.price}
            productDesc={productDetail.description}
          />
        </MainLayout>
        <ProductInfoNav
          productPrice={productDetail.price}
          productDetailImage={productDetail.detail}
        />
      </>
    )
  );
};
export default ProductDetailContainer;
