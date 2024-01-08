'use client';

import { styled } from 'styled-components';
// import Link from 'next/link';
import useMobileDetector from '@/hooks/mobileDetect/useMobileDetector';
import usePlatformServices from '@/hooks/platformService/usePlatformServices';
import HomeCategoryItem from './HomeCategoryItem';
import useGetCategories from '../hooks/useGetCategories';

const HomeCategory = () => {
  const { categoryList } = useGetCategories();
  const { isiOS, isAndroid } = useMobileDetector();
  const { goBack } = usePlatformServices(isiOS, isAndroid);

  console.log(localStorage.getItem('iOSToken'));

  return (
    <StHomeCategory>
      <StHomeCategoryTop>
        <span>카테고리</span>
        <StHomeCategoryViewAllButton type="button" onClick={goBack}>
          {/* <Link href="/product/all" scroll={false}>
            상품 전체보기
          </Link> */}
          상품 전체보기
        </StHomeCategoryViewAllButton>
      </StHomeCategoryTop>
      <StHomeCatoryList>
        {categoryList?.map(({ name, id }, index) => (
          <HomeCategoryItem
            key={id}
            categoryName={name}
            categoryImageIndex={index}
          />
        ))}
      </StHomeCatoryList>
    </StHomeCategory>
  );
};
export default HomeCategory;

const StHomeCategory = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.1rem;

  margin-top: 2.4rem;
`;

const StHomeCategoryTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }
`;

const StHomeCategoryViewAllButton = styled.button`
  color: ${({ theme }) => theme.colors.zw_gray};
  ${({ theme }) => theme.fonts.zw_Body2};
`;

const StHomeCatoryList = styled.div`
  display: flex;
  justify-content: space-between;
`;
