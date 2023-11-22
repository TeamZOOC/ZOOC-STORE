'use client';

import Lottie from 'lottie-react';
import { styled } from 'styled-components';

import { AiLoading } from '../../../../../public/lottie';

const ImageUploadLoading = () => (
  <StImageUploadLoading>
    <Lottie className="ai-lottie" animationData={AiLoading} loop />
    <h2>반려동물의 AI 모델을 생성 중이에요</h2>
    <p>
      최대 1분 가량 소요될 수 있으니
      <br />
      화면을 종료하지 마시고 잠시만 기다려주세요
    </p>
  </StImageUploadLoading>
);

export default ImageUploadLoading;

const StImageUploadLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 8.2rem;

  & > .ai-lottie {
    width: 24.8rem;
    height: 24.8rem;
  }

  & > h2 {
    margin-bottom: 1.2rem;

    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }
  & > p {
    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body1};

    text-align: center;
  }
`;
