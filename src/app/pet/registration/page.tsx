import { MainLayout } from '@/components/layout';

import PetRegistration from './PetRegistration';
import PetRegistrationHeader from './PetRegistrationHeader';

const page = () => (
  <>
    <PetRegistrationHeader />
    <MainLayout>
      <PetRegistration />
    </MainLayout>
  </>
);

export default page;
