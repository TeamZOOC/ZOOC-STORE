'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';

import { theme } from './theme';

const Providers = ({ children }: React.PropsWithChildren) => (
  <StyledComponentsRegistry>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </StyledComponentsRegistry>
);

export default Providers;
