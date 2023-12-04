import { MainLayout } from '@/components/layout';
import ArticleSeriesDesc from './ArticleSeriesDesc';
import ArticleSeriesHeaderContainer from './ArticleSeriesHeaderContainer';
import ArticleSeriesProduct from './ArticleSeriesProduct';
import ArticleSeriesTitle from './ArticleSeriesTitle';

const page = () => (
  <>
    <ArticleSeriesHeaderContainer />
    <ArticleSeriesTitle />
    <ArticleSeriesDesc />
    <MainLayout>
      <ArticleSeriesProduct />
    </MainLayout>
  </>
);

export default page;
