import { MainLayout } from '@/components/layout';
import SignUpTermsAgreement from './SignUpTermsAgreement';
import SignUpHeaderContainer from './SignUpHeaderContainer';

const page = () => (
  <>
    <SignUpHeaderContainer />
    <MainLayout>
      <SignUpTermsAgreement />
    </MainLayout>
  </>
);

export default page;
