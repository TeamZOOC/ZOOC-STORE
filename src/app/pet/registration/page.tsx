import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';

import Registration from './Registration';

const page = () => (
  <>
    <Header headerTitle="반려동물 등록" exit />
    <MainLayout>
      <Registration />
    </MainLayout>
  </>
);

export default page;
