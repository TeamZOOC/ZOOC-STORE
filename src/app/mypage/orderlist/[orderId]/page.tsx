import { Header } from '@/components/header';

import OrderDetail from './(detail)/OrderDetail';

const page = () => (
  <>
    <Header headerTitle="주문상세" exit />
    <OrderDetail />
  </>
);

export default page;
