import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';

import AllStep from './AllStep';

const page = () => (
  <>
    <Header headerTitle="입금하기" exit />
    <MainLayout>
      <AllStep />
    </MainLayout>
  </>
);

export default page;
