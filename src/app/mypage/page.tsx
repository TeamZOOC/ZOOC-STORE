import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';

import MyPageMenu from './(mypage)/MyPageMenu';

const page = () => (
  <>
    <Header headerTitle="MY" />
    <MainLayout>
      <MyPageMenu />
    </MainLayout>
  </>
);

export default page;
