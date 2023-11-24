import { getArticle } from '@/apis/article';
import { ArticleResponse } from '@/types/article';
import { useQuery } from '@tanstack/react-query';

const useGetArticle = () => {
  const { data: articleList } = useQuery<ArticleResponse[]>(
    ['articleList'],
    getArticle,
    {
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24,
    },
  );

  return { articleList };
};

export default useGetArticle;
