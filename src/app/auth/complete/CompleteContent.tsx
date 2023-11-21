'use client';

import { BottomButton } from '@/components/button';
import { useRouter } from 'next/navigation';
import React from 'react';
import { styled } from 'styled-components';

const CompleteContent = () => {
  const router = useRouter();

  return (
    <>
      <StCompleteContent>
        <div>
          <StCompleteContentText>
            <span>쭉</span>에 오신 것을
          </StCompleteContentText>
          <StCompleteContentText>진심으로 환영해요</StCompleteContentText>
        </div>
        <div>
          <StCompleteContentDesc>
            사랑하는 반려동물과의 일상이
          </StCompleteContentDesc>
          <StCompleteContentDesc>
            특별하게 간직되도록 함께 할게요
          </StCompleteContentDesc>
        </div>
      </StCompleteContent>
      <BottomButton
        btnType="button"
        btnName="홈으로 돌아가기"
        disabled={false}
        activeFunc={() => router.push('/')}
      />
    </>
  );
};

export default CompleteContent;

const StCompleteContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-top: 9.7rem;
`;
const StCompleteContentText = styled.p`
  color: ${({ theme }) => theme.colors.zw_black};
  font-family: Gmarket Sans;
  font-size: 3rem;
  font-style: normal;
  font-weight: 300;
  line-height: 4rem;
  letter-spacing: -0.03rem;

  span {
    font-family: Gmarket Sans;
    font-size: 3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 4rem;
    letter-spacing: -0.03rem;
  }
`;

const StCompleteContentDesc = styled.p`
  color: ${({ theme }) => theme.colors.zw_gray};
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 300;
  line-height: 2.4rem; /* 150% */
  letter-spacing: -0.0048rem;
`;
