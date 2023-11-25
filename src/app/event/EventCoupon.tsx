'use client';

import { styled } from 'styled-components';
import { IcFitaPatLogoEvent } from '../../../public/icons';

const EventCoupon = () => (
  <StEventCoupon>
    <StEventCouponTitle>
      <span>당신의 연말은</span>
      <StEventCouponLogoWrapper>
        <IcFitaPatLogoEvent />과 함께
      </StEventCouponLogoWrapper>
    </StEventCouponTitle>
    <StEventCouponDesc>
      <p>올 한해를 사랑하는 반려동물과 설렘으로 마무리하실 수 있도록</p>
      <p>준비한 반려동물 커스텀 선물이에요. 크리스마스 시즌 전에 미리</p>
      <p>행복한 연말을 최대 28% 할인된 가격으로 준비해보세요.</p>
    </StEventCouponDesc>
    <StEventEarlyBird>
      <span>행복한 크리스마스를 미리 준비하는</span>
      <p>얼리버드 특별 해택</p>
    </StEventEarlyBird>
  </StEventCoupon>
);

export default EventCoupon;

const StEventCoupon = styled.div`
  width: 100%;
  padding: 4rem 0 7rem 2.8rem;

  background-color: #ebe8d8;
`;

const StEventCouponTitle = styled.div`
  display: flex;
  flex-direction: column;
  span {
    ${({ theme }) => theme.colors.zw_black}
    font-family: Pretendard;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    letter-spacing: -0.03rem;
  }
`;

const StEventCouponLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  margin-top: 0.6rem;

  ${({ theme }) => theme.colors.zw_black}
  font-family: Pretendard;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.03rem;
`;

const StEventCouponDesc = styled.div`
  margin-top: 1.2rem;

  p {
    ${({ theme }) => theme.colors.zw_black}
    font-family: Pretendard;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 300;
    line-height: 2.2rem; /* 169.231% */
    letter-spacing: -0.03rem;
  }
`;

const StEventEarlyBird = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 8rem;

  span {
    ${({ theme }) => theme.colors.zw_black};
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.03rem;
  }

  p {
    margin-top: 0.5rem;

    ${({ theme }) => theme.colors.zw_black};
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.03px;
  }
`;
