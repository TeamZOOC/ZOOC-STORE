'use client';

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';

import { theme } from './theme';

const Providers = ({ children }: React.PropsWithChildren) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
