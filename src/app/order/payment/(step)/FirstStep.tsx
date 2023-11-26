'use client';

import { useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

import { PopupButton } from '@/components/button';
import { ACCOUNT_NUMBER } from '@/constants/payment';

import { IcFirstStep } from '../../../../../public/icons';
import useToast from '../../../../hooks/toast/useToast';

interface FirstStepProps {
  currentStep: number;
  handleNextStep: Dispatch<SetStateAction<number>>;
}

const FirstStep = ({ currentStep, handleNextStep }: FirstStepProps) => {
  const params = useSearchParams();
  const totalPrice = params.get('totalPrice');
  const { showToast } = useToast();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(`카카오뱅크 ${ACCOUNT_NUMBER} ${totalPrice}원`)
      .then(() => {
        showToast('accountnumber_copied');
      });
  };

  if (currentStep !== 1) {
    return (
      <StUnSelected>
        <IcFirstStep />
        계좌번호 복사
      </StUnSelected>
    );
  }

  return (
    <StStepBox>
      <StTitle>
        <IcFirstStep /> 계좌번호 복사
      </StTitle>
      <StContent>
        <StImage />
        <StInfo>
          <p>예금주ㅣ 김효재</p>
          <p>카카오뱅크 {ACCOUNT_NUMBER}</p>
        </StInfo>
      </StContent>
      <PopupButton
        btnName="복사하기"
        handleClick={() => {
          handleCopy();
          handleNextStep(2);
        }}
      />
    </StStepBox>
  );
};

export default FirstStep;

export const StUnSelected = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  height: 7rem;
  padding: 2.3rem 2.4rem;
  box-sizing: border-box;

  border-radius: 0.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.zw_lightgray};
  color: ${({ theme }) => theme.colors.zw_lightgray};
  ${({ theme }) => theme.fonts.zw_Subhead2};

  & > svg > path {
    fill: ${({ theme }) => theme.colors.zw_lightgray};
  }
  & > svg > circle {
    stroke: ${({ theme }) => theme.colors.zw_lightgray};
  }
`;

export const StStepBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  height: 22.1rem;
  padding: 2.4rem;
  box-sizing: border-box;

  border-radius: 0.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.zw_darkgray};
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.05);
`;

export const StTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 1rem;

  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead1};
`;

const StContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const StImage = styled.div`
  // 이미지 영역
  width: 5rem;
  height: 5rem;
  border-radius: 0.3rem;
  background: #e9e9e9;
`;

const StInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  & > p {
    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
`;
