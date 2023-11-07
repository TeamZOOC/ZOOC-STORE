import { Header } from '@/components/header';
import React from 'react';
import { MainLayout } from '@/components/layout';
import ProductNav from './ProductNav';
import ProductList from './ProductList';

const page = () => (
  <>
    <Header sideMenu />
    <ProductNav />
    <MainLayout>
      <ProductList />
    </MainLayout>
  </>
);

export default page;
