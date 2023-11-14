'use client';

import { styled } from 'styled-components';
import { BottomButton } from '@/components/button';
import AgreementCheckContent from './AgreementCheckContent';

const SignUpTermsAgreement = () => (
  <StSignUpTermsAgreement>
    <div>
      <StSignUpTermsAgreementTitle>
        더 나은 서비스 제공을 위해
      </StSignUpTermsAgreementTitle>
      <StSignUpTermsAgreementTitle>
        <span>약관 동의</span>가 필요해요
      </StSignUpTermsAgreementTitle>
    </div>
    <AgreementCheckContent />
    <BottomButton
      btnType="button"
      btnName="회원가입"
      disabled
      activeFunc={() => {}}
    />
  </StSignUpTermsAgreement>
);

export default SignUpTermsAgreement;

const StSignUpTermsAgreement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.4rem;

  margin-top: 2.4rem;
`;

const StSignUpTermsAgreementTitle = styled.p`
  color: ${({ theme }) => theme.colors.zw_black};
  font-family: Pretendard;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 133.333% */
  letter-spacing: -0.03rem;

  span {
    font-family: Pretendard;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3.2rem; /* 133.333% */
    letter-spacing: -0.03rem;
  }
`;
