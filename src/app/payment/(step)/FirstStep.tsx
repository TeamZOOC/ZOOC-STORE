'use client';

import { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

import { PopupButton } from '@/components/button';

import { IcFirstStep } from '../../../../public/icons';
import { ACCOUNT_NUMBER } from '../../../constants/payment';

interface FirstStepProps {
  currentStep: number;
  handleNextStep: Dispatch<SetStateAction<number>>;
}

const FirstStep = ({ currentStep, handleNextStep }: FirstStepProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(ACCOUNT_NUMBER).then(() => {
      alert('계좌번호를 복사했어요.');
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
          <p>예금주ㅣ 손애진</p>
          <p>우리은행 1002259752313</p>
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
  margin: 0 2.8rem;
  padding: 2.3rem 2.4rem;
  box-sizing: border-box;

  border-radius: 0.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.zw_lightgray};
  color: ${({ theme }) => theme.colors.zw_lightgray};
  ${({ theme }) => theme.fonts.zw_Subhead2};

  & > svg > path {
    fill: #bfbfbf;
  }
  & > svg > circle {
    stroke: #bfbfbf;
  }
`;

export const StStepBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  height: 22.1rem;
  margin: 0 2.8rem;
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
