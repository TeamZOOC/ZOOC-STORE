'use client';

import { HomeArticle } from '..';
import useGetArticle from '../hooks/useGetArticle';

const HomeArticleContainer = () => {
  const { articleList } = useGetArticle();

  return articleList?.map((article) => (
    <HomeArticle article={article} key={article.id} />
  ));
};

export default HomeArticleContainer;
