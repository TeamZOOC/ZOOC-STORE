import { Header } from '@/components/header';
import ProductDetailContainer from './ProductDetailContainer';

const page = ({ params }: { params: { productId: number } }) => (
  <>
    <Header sideMenu />
    <ProductDetailContainer pageParams={params.productId} />
  </>
);

export default page;
