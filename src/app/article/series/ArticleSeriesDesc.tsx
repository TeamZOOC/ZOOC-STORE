'use client';

import Image from 'next/image';
import { styled } from 'styled-components';
import { ImageSeriesDesc } from '../../../../public/images';

const ArticleSeriesDesc = () => (
  <StArticleSeriesDescWrapper>
    <StArticleSeriesDesc>
      <StArticleSeriesDescTitle>
        상상하는 내 반려동물의
      </StArticleSeriesDescTitle>
      <StArticleSeriesDescTitle>
        모든 모습을 만들 수 있는 세상
      </StArticleSeriesDescTitle>
    </StArticleSeriesDesc>
    <StArticleSeriesDescImage>
      <Image src={ImageSeriesDesc} alt="이미지 설명" fill sizes="100vw" />
    </StArticleSeriesDescImage>
    <StArticleSeriesDesc>
      <StArticleSeriesDescText>
        상상만 하던 내 반려동물의 모습을 일상으로 만드세요.
      </StArticleSeriesDescText>
      <StArticleSeriesDescText>
        나에게 fit한 설렘 (pit-a-pat) 을 만들기위해
      </StArticleSeriesDescText>
      <StArticleSeriesDescText>
        핏어팻 시리즈의 컨셉은 계속해서 추가됩니다.
      </StArticleSeriesDescText>
    </StArticleSeriesDesc>
  </StArticleSeriesDescWrapper>
);

export default ArticleSeriesDesc;

const StArticleSeriesDescWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

const StArticleSeriesDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const StArticleSeriesDescTitle = styled.p`
  color: ${({ theme }) => theme.colors.zw_black};
  font-family: var(--font-pretendard-medium);
  font-size: 2rem;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.03rem;
`;

const StArticleSeriesDescImage = styled.div`
  position: relative;
  width: 100%;
  margin: 3rem 0;

  aspect-ratio: 2/1;
`;

const StArticleSeriesDescText = styled.p`
  color: ${({ theme }) => theme.colors.zw_darkgray};
  font-family: var(--font-gmarketsans-light);
  font-size: 1.5rem;
  font-style: normal;
  line-height: 2.4rem; /* 160% */
  letter-spacing: -0.03rem;
`;
