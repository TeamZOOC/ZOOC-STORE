import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';

import PetRegistration from './PetRegistration';

const page = () => (
  <>
    <Header headerTitle="반려동물 등록" exit />
    <MainLayout>
      <PetRegistration />
    </MainLayout>
  </>
);

export default page;
