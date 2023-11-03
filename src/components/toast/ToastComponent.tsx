import { useEffect, useState } from 'react';
import { css, keyframes, styled } from 'styled-components';

import { useToast } from '@/hooks/toast';
import { ToastType } from '@/recoil/toast/atom';

interface ToastComponentProps {
  id: ToastType;
  message: string;
}

const ToastComponent = ({ id, message }: ToastComponentProps) => {
  const [fadeOutActive, setFadeOutActive] = useState(false);
  const { hideToast } = useToast();

  useEffect(() => {
    const timeout = setTimeout(() => setFadeOutActive(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StToast
      $fadeout={fadeOutActive}
      onAnimationEnd={() => {
        hideToast(id);
      }}
    >
      {message}
    </StToast>
  );
};

export default ToastComponent;

const fadeOutAnimataion = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const StToast = styled.div<{ $fadeout: boolean }>`
  position: absolute;
  bottom: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: 4.1rem;
  padding: 1.2rem 2.4rem;
  box-sizing: border-box;

  border-radius: 0.2rem;
  background: ${({ theme }) => theme.colors.zw_black};
  backdrop-filter: blur(2px);
  color: ${({ theme }) => theme.colors.zw_white};
  ${({ theme }) => theme.fonts.zw_Subhead4};

  opacity: ${({ $fadeout }) => ($fadeout ? 0 : 1)};
  ${({ $fadeout }) =>
    $fadeout &&
    css`
      animation: ${fadeOutAnimataion} 0.2s forwards;
    `};
`;
