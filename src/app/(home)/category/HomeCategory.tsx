'use client';

import { styled } from 'styled-components';
import { CATEGORY_LIST } from '@/mocks/categoryListData';
import Link from 'next/link';
import HomeCategoryItem from './HomeCategoryItem';

const HomeCategory = () => (
  <StHomeCategory>
    <StHomeCategoryTop>
      <h2>카테고리</h2>
      <StHomeCategoryViewAllButton type="button">
        <Link href="/product/all">상품 전체보기</Link>
      </StHomeCategoryViewAllButton>
    </StHomeCategoryTop>
    <StHomeCatoryList>
      {CATEGORY_LIST.map(({ categoryName, id }) => (
        <HomeCategoryItem key={id} categoryName={categoryName} />
      ))}
    </StHomeCatoryList>
  </StHomeCategory>
);
export default HomeCategory;

const StHomeCategory = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.1rem;

  margin-top: 3rem;
`;

const StHomeCategoryTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h2 {
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
