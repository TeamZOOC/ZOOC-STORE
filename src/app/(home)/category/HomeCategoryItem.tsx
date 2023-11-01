'use client';

import { styled } from 'styled-components';

interface HomeCategoryItemProps {
  categoryName: string;
}

const HomeCategoryItem = ({ categoryName }: HomeCategoryItemProps) => (
  <StHomeCategoryItem>
    <StHomeCategoryMetaItemBox />
    <span>{categoryName}</span>
  </StHomeCategoryItem>
);

export default HomeCategoryItem;

const StHomeCategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  & > span {
    color: ${({ theme }) => theme.colors.zw_darkgray};
    ${({ theme }) => theme.fonts.zw_Subhead4};
  }
`;

const StHomeCategoryMetaItemBox = styled.div`
  width: 6.5rem;
  height: 6.5rem;

  border-radius: 50%;
  background-color: #eaeaea;
`;
