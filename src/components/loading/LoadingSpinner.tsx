'use client';

import { styled } from 'styled-components';

import { spin } from '@/styles/animation';

const LoadingSpinner = () => (
  <StLoading>
    <div className="spinner" />
  </StLoading>
);

export default LoadingSpinner;

const StLoading = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
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
`;
