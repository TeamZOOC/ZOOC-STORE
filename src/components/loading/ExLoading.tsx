'use client';

import { styled } from 'styled-components';

const ExLoading = () => <StLoading>M</StLoading>;

export default ExLoading;

const StLoading = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100dvh;

  background-color: ${({ theme }) => theme.colors.zw_darkgray};
`;
