import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';

import MyPageMenu from './(mypage)/MyPageMenu';
import PetInfo from './(mypage)/PetInfo';

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
