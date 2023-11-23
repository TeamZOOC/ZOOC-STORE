import { MainLayout } from '@/components/layout';

import ImageUpload from './ImageUpload';
import ImageUploadHeader from './ImageUploadHeader';

const page = () => (
  <>
    <ImageUploadHeader />
    <MainLayout>
      <ImageUpload />
    </MainLayout>
  </>
);

export default page;
