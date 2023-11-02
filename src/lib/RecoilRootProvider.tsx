'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

const RecoilRootProvider = ({ children }: { children: React.ReactNode }) => (
  <RecoilRoot>{children}</RecoilRoot>
);

export default RecoilRootProvider;
