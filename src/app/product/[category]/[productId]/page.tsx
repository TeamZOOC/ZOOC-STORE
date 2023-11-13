import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';
import ProductImage from './ProductImage';
import ProductDetail from './ProductDetail';
import ProductInfoNav from './ProductInfoNav';

const page = () => (
  <>
    <Header sideMenu />
    <ProductImage />
    <MainLayout>
      <ProductDetail />
    </MainLayout>
    <ProductInfoNav />
  </>
);

export default page;
