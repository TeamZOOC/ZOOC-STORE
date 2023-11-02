'use client';

import { styled } from 'styled-components';
import { CATEGORY_LIST } from '@/mocks/categoryListData';
import HomeCategoryItem from './HomeCategoryItem';

const HomeCategory = () => (
  <StHomeCategory>
    <StHomeCategoryTop>
      <h2>카테고리</h2>
      <span>상품 전체보기</span>
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

  margin-top: 5rem;
`;

const StHomeCategoryTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h2 {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }

  & > span {
    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body2};
  }
`;

const StHomeCatoryList = styled.div`
  display: flex;
  justify-content: space-between;
`;
