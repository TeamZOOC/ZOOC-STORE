'use client';

import { AGREEMENT } from '@/constants/agreement';
import Link from 'next/link';
import { styled } from 'styled-components';

const AgreementCheckContent = () => (
  <StAgreementCheckContent>
    <StAgreementCheckAll>
      전체 동의
      <StAgeementCheckBox type="button" />
    </StAgreementCheckAll>
    {AGREEMENT.map(({ id, agreementLink, agreementTitle }) => (
      <StAgreementCheckItem key={id}>
        <StAgreementCheckItemLeft>
          <StAgeementCheckBox type="button" />
          {agreementTitle}
        </StAgreementCheckItemLeft>
        <StAgreementLinkButton>
          <Link target="_blank" href={agreementLink}>
            보기
          </Link>
        </StAgreementLinkButton>
      </StAgreementCheckItem>
    ))}
  </StAgreementCheckContent>
);

export default AgreementCheckContent;

const StAgreementCheckContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const StAgeementCheckBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.8rem;
  height: 1.8rem;

  border: 0.13rem solid ${({ theme }) => theme.colors.zw_lightgray};
  border-radius: 0.2rem;
`;
const StAgreementCheckAll = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.1rem 2rem;

  border: 0.13rem solid ${({ theme }) => theme.colors.zw_lightgray};
  border-radius: 0.2rem;

  color: ${({ theme }) => theme.colors.zw_lightgray};
  ${({ theme }) => theme.fonts.zw_Subhead3}
`;

const StAgreementCheckItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Body1};
`;

const StAgreementCheckItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const StAgreementLinkButton = styled.button`
  padding: 0 0.5rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_lightgray};

  color: ${({ theme }) => theme.colors.zw_lightgray};
  ${({ theme }) => theme.fonts.zw_caption};
`;
