'use client';

import useMobileDetector from '@/hooks/mobileDetect/useMobileDetector';
import usePlatformServices from '@/hooks/platformService/usePlatformServices';
import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isiOS, isAndroid } = useMobileDetector();
  const { getToken } = usePlatformServices(isiOS, isAndroid);
  console.log(getToken());
  return <StMainLayout>{children}</StMainLayout>;
};

export default MainLayout;

const StMainLayout = styled.section`
  padding: 1.6rem 2.8rem 0 2.8rem;
`;
