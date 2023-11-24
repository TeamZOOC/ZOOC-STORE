'use client';

import { styled } from 'styled-components';
import Link from 'next/link';

import Image from 'next/image';
import {
  ImageCategoryAcc,
  ImageCategoryCase,
  ImageCategoryOutfit,
  ImageCategorySeason,
} from '../../../../public/images';

interface HomeCategoryItemProps {
  categoryName: string;
  categoryImageIndex: number;
}

const CATEGORY_IMAGE_LIST = [
  ImageCategorySeason,
  ImageCategoryOutfit,
  ImageCategoryCase,
  ImageCategoryAcc,
];

const HomeCategoryItem = ({
  categoryName,
  categoryImageIndex,
}: HomeCategoryItemProps) => (
  <Link href={`/product/${categoryName}`} scroll={false}>
    <StHomeCategoryItem type="button">
      <Image
        src={CATEGORY_IMAGE_LIST[categoryImageIndex]}
        alt="카테고리 이미지"
        width={70}
        height={70}
      />
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
