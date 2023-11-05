import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';

import OrderList from './OrderList';

const page = () => (
  <>
    <Header headerTitle="주문내역" />
    <MainLayout>
      <OrderList />
    </MainLayout>
  </>
);

export default page;
