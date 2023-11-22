'use client';

import { MainLayout } from '@/components/layout';
import { useRecoilState } from 'recoil';
import { productOptionState } from '@/recoil/product/atom';
import { useEffect } from 'react';
import { cartState } from '@/recoil/cart/atom';
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
  const [, setCart] = useRecoilState(cartState);
  const { productDetail } = useGetProductDetail(pageParams);

  useEffect(() => {
    if (productDetail) {
      setProductOption(productDetail?.optionCategories);

      setCart((prevCart) => {
        // 동일한 id를 가진 상품이 있는지 확인
        const isAlreadyInCart = prevCart.some(
          (item) => item.id === productDetail.id,
        );

        // 동일한 id를 가진 상품이 없는 경우에만 새 상품을 추가
        if (!isAlreadyInCart) {
          return [
            ...prevCart,
            {
              id: productDetail.id,
              image: productDetail.image,
              name: productDetail.name,
              price: productDetail.price,
              sale: productDetail.sale,
            },
          ];
        }

        // 동일한 id를 가진 상품이 있는 경우, 기존 배열을 그대로 반환
        return prevCart;
      });
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
        <ProductInfoNav productPrice={productDetail.price} />
      </>
    )
  );
};
export default ProductDetailContainer;
