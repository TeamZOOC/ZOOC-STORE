'use client';

import { styled } from 'styled-components';

const EventDate = () => (
  <StEventDate>
    <span>11.28 - 12.25</span>
    <span>UP TO 28%</span>
  </StEventDate>
);

export default EventDate;

const StEventDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 3rem;
  padding: 0 2.8rem;

  background-color: #9b2222;

  span {
    color: ${({ theme }) => theme.colors.zw_white};
    font-family: var(--font-pretendard-semi-bold);
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.03rem;
  }
`;
