'use client';

import Image from 'next/image';
import { styled } from 'styled-components';
import {
  ImageEventAcc,
  ImageEventHoodie,
  ImageEventSweat,
} from '../../../public/images';

const EventProduct = () => (
  <StEventProduct>
    <StEventProductTitle>
      <span>귀여운 내 반려동물로</span>
      <p>나를 위한 선물 만들기</p>
    </StEventProductTitle>
    <StEventProductImageGrid>
      <StEventProductImage>
        <Image src={ImageEventHoodie} alt="이벤트 후드" fill sizes="100vw" />
      </StEventProductImage>
      <StEventProductImage>
        <Image src={ImageEventSweat} alt="이벤트 맨투맨" fill sizes="100vw" />
      </StEventProductImage>
    </StEventProductImageGrid>
    <StEventProductAccImage>
      <Image src={ImageEventAcc} alt="이벤트 부가상품" fill sizes="100vw" />
    </StEventProductAccImage>
  </StEventProduct>
);

export default EventProduct;

const StEventProduct = styled.div`
  width: 100%;
  padding: 5.4rem 2.8rem 7.715rem 2.8rem;

  background-color: #1c1c1c;
`;

const StEventProductTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.zw_white};
    text-align: center;
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.03rem;
  }
  p {
    margin-top: 0.5rem;

    color: ${({ theme }) => theme.colors.zw_white};
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.03rem;
  }
`;

const StEventProductImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.7rem;

  margin-top: 4.7rem;
`;

const StEventProductImage = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 1/1.4;
`;

const StEventProductAccImage = styled.div`
  position: relative;

  width: 100%;
  margin-top: 0.9rem;

  aspect-ratio: 1/0.6;
`;
