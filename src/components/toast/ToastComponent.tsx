import React, { useCallback, useEffect, useState } from 'react';
import { css, styled } from 'styled-components';

import { useToast } from '@/hooks/toast';
import { ToastKey } from '@/recoil/toast/atom';
import fadeOutAnimataion from '@/styles/animation/fadeOut';

interface ToastComponentProps {
  id: ToastKey;
  message: string;
}

const ToastComponent = ({ id, message }: ToastComponentProps) => {
  const [fadeOutActive, setFadeOutActive] = useState(false);
  const { hideToast } = useToast();

  useEffect(() => {
    const timeout = setTimeout(() => setFadeOutActive(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const handleAnimationEnd = useCallback(() => {
    hideToast(id);
  }, [id, hideToast]);

  return (
    <StToastWrapper>
      <StToast $fadeout={fadeOutActive} onAnimationEnd={handleAnimationEnd}>
        {message}
      </StToast>
    </StToastWrapper>
  );
};

export default React.memo(ToastComponent);

const StToastWrapper = styled.div`
  position: absolute;
  bottom: 9.7rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const StToast = styled.div<{ $fadeout: boolean }>`
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
