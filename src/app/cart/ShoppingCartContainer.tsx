'use client';

import { MainLayout } from '@/components/layout';
import { useRecoilValue } from 'recoil';
import { cartState } from '@/recoil/cart/atom';
import ShoppingCartList from './ShoppingCartList';
import Hr from './Hr';
import ShoppingPayment from './ShoppingPayment';
import ShoppingCartEmpty from './ShoppingCartEmpty';

const ShoppingCartContainer = () => {
  const cart = useRecoilValue(cartState);
  return cart.length > 0 ? (
    <>
      <MainLayout>
        <ShoppingCartList />
      </MainLayout>
      <Hr />
      <MainLayout>
        <ShoppingPayment />
      </MainLayout>
    </>
  ) : (
    <ShoppingCartEmpty />
  );
};

export default ShoppingCartContainer;
