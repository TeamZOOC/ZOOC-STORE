'use client';

import { ArticleInfo } from '@/types/article';
import { styled } from 'styled-components';

const HomeArticle = ({ article }: { article: ArticleInfo }) => {
  const { articleTitle, articleDesc } = article;
  return (
    <StHomeArticle>
      <StHomeArticleImage />
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
  width: 100%;
  height: 20rem;
  margin-bottom: 2rem;

  background-color: #eaeaea;
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
