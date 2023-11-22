import React from 'react';
import { MainLayout } from '@/components/layout';
import ProductNav from './ProductNav';
import ProductList from './ProductList';
import ProductHeaderContainer from './ProductHeaderContainer';

const page = () => (
  <>
    <ProductHeaderContainer />
    <ProductNav />
    <MainLayout>
      <ProductList />
    </MainLayout>
  </>
);

export default page;
