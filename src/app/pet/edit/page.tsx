import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';

import PetEdit from './PetEdit';

const page = () => (
  <>
    <Header headerTitle="프로필 수정" exit />
    <MainLayout>
      <PetEdit />
    </MainLayout>
  </>
);

export default page;
