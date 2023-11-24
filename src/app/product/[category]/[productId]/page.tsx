import ProductDetailContainer from './ProductDetailContainer';
import ProductDetailHeaderContainer from './ProductDetailHeaderContainer';

const page = ({ params }: { params: { productId: number } }) => (
  <>
    <ProductDetailHeaderContainer />
    <ProductDetailContainer pageParams={params.productId} />
  </>
);

export default page;
