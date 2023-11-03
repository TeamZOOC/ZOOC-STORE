import { MainLayout } from '@/components/layout';
import { ARTICLE_LIST } from '@/mocks/articleData';
import { Header } from '@/components/header';
import { HomeArticle, HomeCategory, HomeProduct } from './(home)';
import HomeCarusel from './(home)/carusel/HomeCarusel';

const page = () => (
  <>
    <Header sideMenu />
    <HomeCarusel />
    <MainLayout>
      <HomeCategory />
      <HomeArticle article={ARTICLE_LIST[0]} />
      <HomeProduct />
      <HomeArticle article={ARTICLE_LIST[1]} />
      <HomeArticle article={ARTICLE_LIST[2]} />
    </MainLayout>
  </>
);

export default page;
