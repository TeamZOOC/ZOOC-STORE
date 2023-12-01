'use client';

import { styled } from 'styled-components';
import { ArticleResponse } from '@/types/article';
import { ProductItem } from '@/components/product';
import Image from 'next/image';

interface HomeArticleProps {
  article: ArticleResponse;
}

const HomeArticle = ({ article }: HomeArticleProps) => {
  const { title, detail, image, products } = article;
  return (
    <StHomeArticle>
      <StHomeArticleImage>
        {image !== 'test' && (
          <Image src={image} alt="아티클" fill sizes="100vw" />
        )}
      </StHomeArticleImage>
      <StHomeArticleTitle>{title}</StHomeArticleTitle>
      <StHomeArticleDesc>{detail}</StHomeArticleDesc>
      <StHomeProduct>
        {products?.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            usedComponent="article"
          />
        ))}
      </StHomeProduct>
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

const StHomeProduct = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.9rem;

  width: 100%;
  margin-top: 2rem;
`;
