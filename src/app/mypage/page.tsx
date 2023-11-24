import { MainLayout } from '@/components/layout';

import MyPageMenu from './MyPageMenu';
import PetInfo from './pet/PetInfo';
import MypageHeader from './MypageHeader';

const page = () => (
  <>
    <MypageHeader />
    <MainLayout>
      <PetInfo />
      <MyPageMenu />
    </MainLayout>
  </>
);

export default page;
