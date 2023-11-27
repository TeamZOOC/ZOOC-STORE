'use client';

import { styled } from 'styled-components';
import Image from 'next/image';
import {
  ImageSampleAcc,
  ImageSampleAccDetail,
  ImageSampleHoodie,
  ImageSampleHoodieDetail,
  ImageSampleSweat,
  ImageSampleSweatDetail,
} from '../../../public/images';

const EventSample = () => (
  <>
    <StEventSample>
      <Image src={ImageSampleAcc} alt="이벤트 부가상품" fill sizes="100vw" />
      <StEventProductButton>상품 바로가기</StEventProductButton>
    </StEventSample>
    <StEventSampleDetail>
      <Image
        src={ImageSampleAccDetail}
        alt="이벤트 부가상품"
        fill
        sizes="100vw"
      />
    </StEventSampleDetail>
    <StEventSample>
      <Image
        src={ImageSampleHoodie}
        alt="이벤트 후드 부가상품"
        fill
        sizes="100vw"
      />
      <StEventProductButton>상품 바로가기</StEventProductButton>
    </StEventSample>
    <StEventSampleHoodieDetail>
      <Image
        src={ImageSampleHoodieDetail}
        alt="이벤트 후드 부가상품"
        fill
        sizes="100vw"
      />
    </StEventSampleHoodieDetail>
    <StEventSample>
      <Image
        src={ImageSampleSweat}
        alt="이벤트 맨투맨 부가상품"
        fill
        sizes="100vw"
      />
      <StEventProductButton>상품 바로가기</StEventProductButton>
    </StEventSample>
    <StEventSampleSweatDetail>
      <Image
        src={ImageSampleSweatDetail}
        alt="이벤트 맨투맨 부가상품"
        fill
        sizes="100vw"
      />
    </StEventSampleSweatDetail>
    <StEventFooterSpace />
  </>
);

export default EventSample;

const StEventSample = styled.div`
  position: relative;
  width: 100%;

  aspect-ratio: 1/1.736;
`;

const StEventSampleDetail = styled.div`
  position: relative;
  width: 100%;

  aspect-ratio: 1/2.7;
`;

const StEventSampleHoodieDetail = styled.div`
  position: relative;
  width: 100%;

  aspect-ratio: 1/2.1;
`;

const StEventFooterSpace = styled.div`
  width: 100%;
  height: 10rem;

  background-color: #ebe8db;
`;
const StEventSampleSweatDetail = styled.div`
  position: relative;
  width: 100%;

  aspect-ratio: 1/2.3;
`;

const StEventProductButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.zw_black};

  color: ${({ theme }) => theme.colors.zw_black};
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.03rem;

  transform: translate(-50%);
`;
