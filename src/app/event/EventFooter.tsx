'use client';

import { FITAPAT_EMAIL, FITAPAT_INSTAGRAM } from '@/constants/fitapatUrls';
import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';
import { IcBtnInstaBig, IcBtnMail } from '../../../public/icons';
import { ImageEventFooter } from '../../../public/images';

const EventFooter = () => (
  <StEventFooter>
    <Image src={ImageEventFooter} alt="이벤트 하단" fill sizes="100vw" />
    <StEventFooteSocialWrapper>
      <Link href={FITAPAT_INSTAGRAM}>
        <IcBtnInstaBig />
      </Link>
      <Link href={`mailto:${FITAPAT_EMAIL}`}>
        <IcBtnMail />
      </Link>
    </StEventFooteSocialWrapper>
  </StEventFooter>
);

export default EventFooter;

const StEventFooter = styled.div`
  position: relative;
  width: 100%;

  aspect-ratio: 1/1.5;
`;

const StEventFooteSocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  position: absolute;
  bottom: 6rem;

  width: 100%;
`;
