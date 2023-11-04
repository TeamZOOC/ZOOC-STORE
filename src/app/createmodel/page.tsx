import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';

import ImageUpload from './ImageUpload';

const page = () => (
  <>
    <Header headerTitle="이미지 업로드" exit />
    <MainLayout>
      <ImageUpload />
    </MainLayout>
  </>
);

export default page;
