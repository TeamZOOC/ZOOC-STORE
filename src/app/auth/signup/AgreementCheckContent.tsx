'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { css, styled } from 'styled-components';

import { BottomButton } from '@/components/button';
import { AGREEMENT } from '@/constants/agreement';
import { useToast } from '@/hooks/toast';

import { IcCheck } from '../../../../public/icons';
import { returnPathState } from '../../../recoil/order/atom';
import useCheckAgreement from '../hooks/useCheckAgreement';

const AgreementCheckContent = () => {
  const {
    agreement,
    isAgreement,
    isAllAgreement,
    handleCheckAgreement,
    handleCheckAllAgreement,
  } = useCheckAgreement();

  const router = useRouter();
  const { showToast } = useToast();
  const returnPath = useRecoilValue(returnPathState);

  const handleCheckAgreementToast = () => {
    if (!isAllAgreement && !isAgreement) {
      showToast('agreement');
      return;
    }

    if (returnPath) {
      router.push('/pet/registration');
    } else router.push('/auth/complete');
  };

  return (
    <StAgreementCheckContent>
      <StAgreementCheckAll $checkAll={isAllAgreement}>
        전체 동의
        <StAgeementCheckBox
          type="button"
          $check={isAllAgreement}
          onClick={handleCheckAllAgreement}
        >
          {isAllAgreement && <IcCheck />}
        </StAgeementCheckBox>
      </StAgreementCheckAll>
      {AGREEMENT.map(({ id, agreementLink, agreementTitle, show }) => (
        <StAgreementCheckItem key={id} onClick={() => handleCheckAgreement(id)}>
          <StAgreementCheckItemLeft>
            <StAgeementCheckBox type="button" $check={agreement[id - 1]}>
              {agreement[id - 1] && <IcCheck />}
            </StAgeementCheckBox>
            {agreementTitle}
          </StAgreementCheckItemLeft>
          {show && (
            <StAgreementLinkButton>
              <Link target="_blank" href={agreementLink}>
                보기
              </Link>
            </StAgreementLinkButton>
          )}
        </StAgreementCheckItem>
      ))}
      <BottomButton
        btnType="button"
        btnName="회원가입"
        disabled={!isAgreement && !isAllAgreement}
        activeFunc={handleCheckAgreementToast}
      />
    </StAgreementCheckContent>
  );
};

export default AgreementCheckContent;

const StAgreementCheckContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const StAgeementCheckBox = styled.button<{ $check?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.8rem;
  height: 1.8rem;

  border-radius: 0.2rem;

  ${({ $check }) =>
    $check
      ? css`
          border: 0.13rem solid ${({ theme }) => theme.colors.zw_point};
          background-color: ${({ theme }) => theme.colors.zw_point};
        `
      : css`
          border: 0.13rem solid ${({ theme }) => theme.colors.zw_lightgray};
          background-color: transparent;
        `}

  transition : all 0.1s;
`;
const StAgreementCheckAll = styled.div<{ $checkAll: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.1rem 2rem;

  border-radius: 0.2rem;
  ${({ theme }) => theme.fonts.zw_Subhead3}

  ${({ $checkAll }) =>
    $checkAll
      ? css`
          border: 0.13rem solid ${({ theme }) => theme.colors.zw_point};
          color: ${({ theme }) => theme.colors.zw_point};
        `
      : css`
          border: 0.13rem solid ${({ theme }) => theme.colors.zw_lightgray};
          color: ${({ theme }) => theme.colors.zw_lightgray};
        `}

  transition : all 0.1s;
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
