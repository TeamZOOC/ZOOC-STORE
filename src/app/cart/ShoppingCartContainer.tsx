'use client';

import { useRecoilValue } from 'recoil';

import { MainLayout } from '@/components/layout';
import { cartState } from '@/recoil/cart/atom';

import Hr from './Hr';
import ShoppingCartEmpty from './ShoppingCartEmpty';
import ShoppingCartList from './ShoppingCartList';
import ShoppingPayment from './ShoppingPayment';

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
