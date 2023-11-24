import { MainLayout } from '@/components/layout';

import PetEdit from './PetEdit';
import PetEditHeaderContainer from './PetEditHeaderContainer';

const page = () => (
  <>
    <PetEditHeaderContainer />
    <MainLayout>
      <PetEdit />
    </MainLayout>
  </>
);

export default page;
