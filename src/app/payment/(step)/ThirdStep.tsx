'use client';

import { styled } from 'styled-components';

import { PopupButton } from '@/components/button';

import { IcThirdStep } from '../../../../public/icons';
import { StStepBox, StTitle } from './FirstStep';

interface ThirdStepProps {
  handleNextStep: () => void;
}

const ThirdStep = ({ handleNextStep }: ThirdStepProps) => (
  <StThirdStepBox>
    <StThirdTitle>
      <IcThirdStep /> 결제 완료
    </StThirdTitle>
    <StContent>
      <strong>결제가 완료되었어요!</strong>
      <p>
        주문 확정 시, 카카오톡 채널톡으로
        <br />
        다시 한 번 알려드릴게요
      </p>
    </StContent>
    <PopupButton btnName="네, 확인했어요" handleClick={handleNextStep} />
  </StThirdStepBox>
);

export default ThirdStep;

const StThirdStepBox = styled(StStepBox)`
  height: 23.9rem;
`;

const StThirdTitle = styled(StTitle)``;

const StContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & > strong {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
  & > p {
    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
`;
