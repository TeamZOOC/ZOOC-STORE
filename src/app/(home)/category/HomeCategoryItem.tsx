'use client';

import { styled } from 'styled-components';
import Link from 'next/link';
import {
  IcCategoryAcc,
  IcCategoryCase,
  IcCategoryOutfit,
  IcCategorySeason,
} from '../../../../public/icons';

interface HomeCategoryItemProps {
  categoryName: string;
  categoryImageIndex: number;
}

const CATEGORY_IMAGE_LIST = [
  <IcCategorySeason />,
  <IcCategoryOutfit />,
  <IcCategoryCase />,
  <IcCategoryAcc />,
];

const HomeCategoryItem = ({
  categoryName,
  categoryImageIndex,
}: HomeCategoryItemProps) => (
  <Link href={`/product/${categoryName}`} scroll={false}>
    <StHomeCategoryItem type="button">
      {CATEGORY_IMAGE_LIST[categoryImageIndex]}
      <span>{categoryName}</span>
    </StHomeCategoryItem>
  </Link>
);

export default HomeCategoryItem;

const StHomeCategoryItem = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  & > span {
    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_price_small};
  }
`;
