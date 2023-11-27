'use client';

import Image from 'next/image';
import { styled } from 'styled-components';
import { useRouter } from 'next/navigation';
import useProgress from '@/hooks/progress/useProgress';
import { ImageEvent } from '../../../public/images';
import { IcBackWhite } from '../../../public/icons';

const EventArticle = () => {
  const router = useRouter();
  useProgress();
  return (
    <StEventArticle>
      <StEventArticleTitle>
        <StBackButton type="button" onClick={() => router.back()}>
          <IcBackWhite />
        </StBackButton>
        크리스마스 특별 기획전
      </StEventArticleTitle>
      <Image
        src={ImageEvent}
        alt="홈 배너 아티클"
        fill
        priority
        sizes="100vh"
      />
    </StEventArticle>
  );
};

export default EventArticle;

const StEventArticle = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 1/1.53;
`;

const StEventArticleTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  position: relative;
  top: 7.5rem;

  width: 100%;
  height: 3.6rem;

  color: ${({ theme }) => theme.colors.zw_white};
  ${({ theme }) => theme.fonts.zw_Subhead2}

  z-index: 10;
`;

const StBackButton = styled.button`
  position: absolute;
  left: 2.8rem;

  z-index: 10;
`;
