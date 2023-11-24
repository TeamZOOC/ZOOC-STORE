/* eslint-disable react/no-array-index-key */

'use client';

import { cartState } from '@/recoil/cart/atom';
import { useRecoilValue } from 'recoil';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCartList = () => {
  const cart = useRecoilValue(cartState);

  return cart.map((cartItem, index) => (
    <ShoppingCartItem key={index} cartItem={cartItem} selectedIndex={index} />
  ));
};

export default ShoppingCartList;
