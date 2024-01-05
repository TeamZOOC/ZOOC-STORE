import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';

import { HomeCategory } from './(home)';
import HomeArticleContainer from './(home)/article/HomeArticleContainer';
import HomeCarusel from './(home)/carusel/HomeCarusel';
import HomeFooter from './(home)/footer/HomeFooter';
import ChangeRoute from './ChangeRoute';
import HomeReview from './(home)/review/HomeReview';

const page = () => (
  <>
    <ChangeRoute />
    <Header sideMenu />
    <HomeCarusel />
    <MainLayout>
      <HomeCategory />
      <HomeArticleContainer />
      <HomeReview />
    </MainLayout>
    <HomeFooter />
  </>
);

export default page;
