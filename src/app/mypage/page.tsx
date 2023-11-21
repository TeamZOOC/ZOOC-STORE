import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';

import MyPageMenu from './MyPageMenu';
import PetInfo from './pet/PetInfo';

const page = () => (
  <>
    <Header headerTitle="MY" />
    <MainLayout>
      <PetInfo />
      <MyPageMenu />
    </MainLayout>
  </>
);

export default page;
