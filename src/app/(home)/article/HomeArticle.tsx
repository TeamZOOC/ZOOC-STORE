'use client';

import { styled } from 'styled-components';
import Image from 'next/image';
import { ImageArticle } from '../../../../public/images';

interface ArticleInfo {
  articleTitle: string;
  articleDesc: string;
}

const HomeArticle = ({ article }: { article: ArticleInfo }) => {
  const { articleTitle, articleDesc } = article;
  return (
    <StHomeArticle>
      <StHomeArticleImage>
        <Image src={ImageArticle} alt="아티클" fill />
      </StHomeArticleImage>
      <StHomeArticleTitle>{articleTitle}</StHomeArticleTitle>
      <StHomeArticleDesc>{articleDesc}</StHomeArticleDesc>
    </StHomeArticle>
  );
};

export default HomeArticle;

const StHomeArticle = styled.section`
  margin-top: 7rem;
`;

const StHomeArticleImage = styled.div`
  position: relative;

  margin-bottom: 2rem;

  aspect-ratio: 1.5/1;
`;

const StHomeArticleTitle = styled.p`
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead1};
`;

const StHomeArticleDesc = styled.div`
  width: 100%;
  height: 4rem;

  color: ${({ theme }) => theme.colors.zw_gray};
  ${({ theme }) => theme.fonts.zw_Body2};

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
`;
