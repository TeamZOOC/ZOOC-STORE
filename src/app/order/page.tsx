import { Header } from '@/components/header';

import Order from './(order)/Order';

const page = () => (
  <>
    <Header headerTitle="주문하기" exit />
    <Order />
  </>
);

export default page;
