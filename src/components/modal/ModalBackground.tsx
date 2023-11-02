import React from 'react';
import { styled } from 'styled-components';

interface ModalBackgroundProps {
  children: React.ReactNode;
}

const ModalBackground = ({ children }: ModalBackgroundProps) => (
  <StModalBackground>{children}</StModalBackground>
);

export default ModalBackground;

const StModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.4);
`;
