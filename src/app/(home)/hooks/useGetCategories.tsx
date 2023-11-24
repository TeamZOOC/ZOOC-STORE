import { getCategories } from '@/apis/category';
import { CategoryListResponse } from '@/types/category';
import { useQuery } from '@tanstack/react-query';

const useGetCategories = () => {
  const { data: categoryList } = useQuery<CategoryListResponse[]>(
    ['category'],
    getCategories,
    { staleTime: 1000 * 60 * 60 * 24 },
  );

  return {
    categoryList,
  };
};

export default useGetCategories;
