import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';

import ImageUpload from './ImageUpload';

const page = () => (
  <>
    <Header headerTitle="AI 모델 생성" exit />
    <MainLayout>
      <ImageUpload />
    </MainLayout>
  </>
);

export default page;
