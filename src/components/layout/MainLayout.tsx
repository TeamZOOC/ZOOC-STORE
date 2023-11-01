'use client';

import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

const MainLayout = ({ children }: { children: ReactNode }) => (
  <StMainLayout>{children}</StMainLayout>
);

export default MainLayout;

const StMainLayout = styled.section`
  padding: 0 2.8rem;
`;
