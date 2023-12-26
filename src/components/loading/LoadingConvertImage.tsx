'use client';

import { styled } from 'styled-components';

import { spin } from '@/styles/animation';

const LoadingConvertImage = () => (
  <StLoading>
    <div className="spinner" />
    <h2>이미지 확장자를 변환하는 중이에요</h2>
    <p>
      최대 1분 가량 소요될 수 있으니
      <br />
      화면을 종료하지 마시고 잠시만 기다려주세요
    </p>
  </StLoading>
);

export default LoadingConvertImage;

const StLoading = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.zw_background};
  z-index: 1000;

  .spinner {
    border: 0.3rem solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 0.3rem solid #000;
    width: 4rem;
    height: 4rem;
    animation: ${spin} 1s linear infinite;
  }

  & > h2 {
    margin: 3rem 0 1.2rem 0;

    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }
  & > p {
    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body1};

    text-align: center;
  }
`;
