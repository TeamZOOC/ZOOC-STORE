import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';
import { CART_LIST } from '@/mocks/cartData';
import ShoppingCartItem from './ShoppingCartItem';
import Hr from './Hr';
import ShoppingPayment from './ShoppingPayment';

const page = () => (
  <>
    <Header headerTitle="장바구니" />
    <MainLayout>
      {CART_LIST.map((cartItem) => (
        <ShoppingCartItem key={cartItem.id} cart={cartItem} />
      ))}
    </MainLayout>
    <Hr />
    <MainLayout>
      <ShoppingPayment />
    </MainLayout>
  </>
);
export default page;
