'use client';

import { styled } from 'styled-components';

const Hr = () => <StHr />;

export default Hr;

const StHr = styled.hr`
  height: 0.1rem;
  margin: 4rem 0 2.4rem 2.8rem;

  border: none;
  background-color: ${({ theme }) => theme.colors.zw_brightgray};
`;
