import { Header } from '@/components/header';

import OrderList from './(order)/OrderList';

const page = () => (
  <>
    <Header headerTitle="주문내역" />
    <OrderList />
  </>
);

export default page;
