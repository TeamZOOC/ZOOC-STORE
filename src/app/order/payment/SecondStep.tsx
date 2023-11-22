'use client';

import { useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

import { PopupButton } from '@/components/button';

import {
  IcKakaoBank,
  IcKakaoPay,
  IcSecondStep,
  IcToss
} from '../../../../public/icons';
import { StStepBox, StTitle, StUnSelected } from './FirstStep';

interface SecondStepProps {
  currentStep: number;
  handleNextStep: Dispatch<SetStateAction<number>>;
}

const SecondStep = ({ currentStep, handleNextStep }: SecondStepProps) => {
  const params = useSearchParams();
  const totalPrice = params.get('totalPrice');

  if (currentStep !== 2) {
    return (
      <StUnSelectedSecond>
        <IcSecondStep />
        입금
      </StUnSelectedSecond>
    );
  }

  return (
    <StSecondStepBox>
      <StSecondTitle>
        <IcSecondStep /> 입금
      </StSecondTitle>
      <StSecondContent>
        <StInfo>
          원하시는 금융앱에서
          <br />
          <span>{totalPrice}</span>원을 입금해주세요
        </StInfo>
        <StImages>
          <IcToss />
          <IcKakaoBank />
          <IcKakaoPay />
        </StImages>
        <p>선택 시, 해당 서비스로 이동할 수 있어요</p>
      </StSecondContent>
      <PopupButton
        btnName="입금을 완료했어요"
        handleClick={() => {
          handleNextStep(3);
        }}
      />
    </StSecondStepBox>
  );
};

export default SecondStep;

const StUnSelectedSecond = styled(StUnSelected)``;

const StSecondStepBox = styled(StStepBox)`
  height: 31.9rem;
`;

const StSecondTitle = styled(StTitle)``;

const StSecondContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & > p {
    color: ${({ theme }) => theme.colors.zw_darkgray};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
`;

const StInfo = styled.strong`
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Body1};

  & > span {
    color: ${({ theme }) => theme.colors.zw_point};
    ${({ theme }) => theme.fonts.zw_Subhead3};
  }
`;

const StImages = styled.div`
  display: flex;
  gap: 1rem;
`;
