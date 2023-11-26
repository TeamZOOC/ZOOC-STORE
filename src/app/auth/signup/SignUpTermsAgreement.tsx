'use client';

import { styled } from 'styled-components';
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
  font-family: var(--font-pretendard-regular);
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem; /* 133.333% */
  letter-spacing: -0.03rem;

  span {
    font-family: var(--font-pretendard-semi-bold);
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3.2rem; /* 133.333% */
    letter-spacing: -0.03rem;
  }
`;
