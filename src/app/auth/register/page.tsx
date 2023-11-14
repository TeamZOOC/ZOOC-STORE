import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';
import RegisterTermsAgreement from './RegisterTermsAgreement';

const page = () => (
  <>
    <Header headerTitle="회원가입" exit />
    <MainLayout>
      <RegisterTermsAgreement />
    </MainLayout>
  </>
);

export default page;
