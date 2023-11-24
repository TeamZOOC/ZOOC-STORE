import { Header } from '@/components/header';
import { MainLayout } from '@/components/layout';
import HomeCarusel from './(home)/carusel/HomeCarusel';
import HomeFooter from './(home)/footer/HomeFooter';
import HomeArticleContainer from './(home)/article/HomeArticleContainer';
import { HomeCategory } from './(home)';

const page = () => (
  <>
    <Header sideMenu />
    <HomeCarusel />
    <MainLayout>
      <HomeCategory />
      <HomeArticleContainer />
    </MainLayout>
    <HomeFooter />
  </>
);

export default page;
