'use client';

import { Header } from '@/components/header';
import { useRouter } from 'next/navigation';

const ArticleSeriesHeaderContainer = () => {
  const router = useRouter();
  return (
    <Header
      headerTitle="나에게 fit 한 설렘, 핏어팻 시리즈"
      backFunc={() => {
        router.push('/');
      }}
    />
  );
};

export default ArticleSeriesHeaderContainer;
