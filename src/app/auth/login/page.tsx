import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';
import LoginContent from './LoginContent';

const page = () => (
  <>
    <Header />
    <MainLayout>
      <LoginContent />
    </MainLayout>
  </>
);

export default page;
