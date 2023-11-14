'use client';

import { styled } from 'styled-components';

const Hr = () => <StHr />;

export default Hr;

const StHr = styled.div`
  height: 0.1rem;
  margin: 4rem 0 2.4rem 2.8rem;

  background: ${({ theme }) => theme.colors.zw_brightgray};
`;
