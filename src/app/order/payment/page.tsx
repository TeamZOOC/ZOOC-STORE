import { MainLayout } from '@/components/layout';

import AllStep from './AllStep';
import PaymentHeader from './PaymentHeader';

const page = () => (
  <>
    <PaymentHeader />
    <MainLayout>
      <AllStep />
    </MainLayout>
  </>
);

export default page;
