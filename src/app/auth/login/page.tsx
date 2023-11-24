import { MainLayout } from '@/components/layout';

import LoginContent from './LoginContent';
import LoginHeader from './LoginHeader';

const page = () => (
  <>
    <LoginHeader />
    <MainLayout>
      <LoginContent />
    </MainLayout>
  </>
);

export default page;
