'use client';

import Image from 'next/image';
import React from 'react';
import { styled } from 'styled-components';
import { ImageSeriesTitle } from '../../../../public/images';

const ArticleSeriesTitle = () => (
  <StArticleSeriesTitle>
    <Image src={ImageSeriesTitle} alt="시리즈 타이틀" fill sizes="100vw" />
  </StArticleSeriesTitle>
);

export default ArticleSeriesTitle;

const StArticleSeriesTitle = styled.div`
  position: relative;
  width: 100%;

  aspect-ratio: 1.6/1;
`;
