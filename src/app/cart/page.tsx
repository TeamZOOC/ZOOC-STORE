import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';
import { CART_LIST } from '@/mocks/cartData';
import ShoppingCartItem from './ShoppingCartItem';

const page = () => (
  <>
    <Header headerTitle="장바구니" />
    <MainLayout>
      {CART_LIST.map((cartItem) => (
        <ShoppingCartItem key={cartItem.id} cart={cartItem} />
      ))}
    </MainLayout>
  </>
);
export default page;
