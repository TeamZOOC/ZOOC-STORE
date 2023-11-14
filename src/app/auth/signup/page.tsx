import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';
import SignUpTermsAgreement from './SignUpTermsAgreement';

const page = () => (
  <>
    <Header headerTitle="회원가입" exit />
    <MainLayout>
      <SignUpTermsAgreement />
    </MainLayout>
  </>
);

export default page;
