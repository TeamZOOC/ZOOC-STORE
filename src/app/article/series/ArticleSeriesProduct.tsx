'use client';

import Image from 'next/image';
import { styled } from 'styled-components';
import { useRouter } from 'next/navigation';
import {
  ImageSeriesCase,
  ImageSeriesCase1,
  ImageSeriesCase2,
  ImageSeriesCase3,
  ImageSeriesLogo,
  ImageSeriesSweat,
  ImageSeriesSweat1,
  ImageSeriesSweat2,
  ImageSeriesSweat3,
} from '../../../../public/images';

const ArticleSeriesProduct = () => {
  const router = useRouter();
  return (
    <StArticleSeriesProduct>
      <StArticleSeriesProductTitle>
        언제나 함께하는 일상
      </StArticleSeriesProductTitle>
      <StArticleSeriesProductFirstImage>
        <Image
          src={ImageSeriesLogo}
          alt="핏어팻 시리즈 로고"
          fill
          sizes="100vw"
        />
      </StArticleSeriesProductFirstImage>
      <StArticleSeriesProductFirstDesc>
        <StArticleSeriesProductDesc>
          반려동물과 함께하는 일상은 인생에서 가장 큰 행복이죠.
        </StArticleSeriesProductDesc>
        <StArticleSeriesProductDesc>
          그러나 현실은 종종 우리 사이를 떨어트려놓습니다.
        </StArticleSeriesProductDesc>
        <StArticleSeriesProductDesc>
          핏어팻 시리즈는 이러한 순간에 주목했습니다.
        </StArticleSeriesProductDesc>
        <br />
        <br />
        <br />
        <br />
        <StArticleSeriesProductDesc>
          이제 반려동물이 함께하는 데일리 룩과 폰케이스로
        </StArticleSeriesProductDesc>
        <StArticleSeriesProductDesc>
          언제나 함께보내는 일상을 즐겨보세요
        </StArticleSeriesProductDesc>
      </StArticleSeriesProductFirstDesc>
      <StArticleSeriesProductTitle>핏어팻 맨투맨</StArticleSeriesProductTitle>
      <StArticleSeriesProductMainImage>
        <Image src={ImageSeriesSweat} alt="핏어팻 맨투맨" fill sizes="100vw" />
      </StArticleSeriesProductMainImage>
      <StArticleSeriesProductSecondDesc>
        <StArticleSeriesProductDesc>
          지금 8장의 일상 사진으로 모델을 생성해보세요.
        </StArticleSeriesProductDesc>
        <StArticleSeriesProductDesc>
          우비, 축구왕, 경찰관, 마법사 4가지 컨셉의
        </StArticleSeriesProductDesc>
        <StArticleSeriesProductDesc>
          우리 아이가 맨투맨 안에서 나와 일상을 함께 합니다.
        </StArticleSeriesProductDesc>
        <StArticleSeriesProductDesc>
          블랙컬러로 캐주얼하고 데일리하게 입어보세요.
        </StArticleSeriesProductDesc>
        <StArticleSeriesProductLink
          onClick={() => router.push('/product/outfit')}
        >
          상품 바로가기
        </StArticleSeriesProductLink>
      </StArticleSeriesProductSecondDesc>
      <StArticleSeriesProducSweatImage>
        <Image
          src={ImageSeriesSweat1}
          alt="핏어팻 맨투맨 디테일"
          fill
          sizes="100vw"
        />
      </StArticleSeriesProducSweatImage>
      <StArticleSeriesProducSweatImage>
        <Image
          src={ImageSeriesSweat2}
          alt="핏어팻 맨투맨 디테일"
          fill
          sizes="100vw"
        />
      </StArticleSeriesProducSweatImage>
      <StArticleSeriesProducSweatImage>
        <Image
          src={ImageSeriesSweat3}
          alt="핏어팻 맨투맨 디테일"
          fill
          sizes="100vw"
        />
      </StArticleSeriesProducSweatImage>
      <StArticleSeriesProductTitle>핏어팻 폰케이스</StArticleSeriesProductTitle>
      <StArticleSeriesProductMainImage>
        <Image src={ImageSeriesCase} alt="핏어팻 케이스" fill sizes="100vw" />
      </StArticleSeriesProductMainImage>
      <StArticleSeriesProductSecondDesc>
        <StArticleSeriesProductDesc>
          6가지 컨셉이 준비되어있는 투명 젤리 케이스.
        </StArticleSeriesProductDesc>
        <StArticleSeriesProductDesc>
          8장의 일상 사진, 한번의 AI 모델 생성으로
        </StArticleSeriesProductDesc>
        <StArticleSeriesProductDesc>
          원하는 모습의 우리 아이를 주머니속에서 함께해요
        </StArticleSeriesProductDesc>
        <StArticleSeriesProductLink
          onClick={() => router.push('/product/case')}
        >
          상품 바로가기
        </StArticleSeriesProductLink>
      </StArticleSeriesProductSecondDesc>
      <StArticleSeriesProducCaseImage>
        <Image
          src={ImageSeriesCase1}
          alt="핏어팻 케이스 디테일"
          fill
          sizes="100vw"
        />
      </StArticleSeriesProducCaseImage>
      <StArticleSeriesProducCaseImage>
        <Image
          src={ImageSeriesCase2}
          alt="핏어팻 케이스 디테일"
          fill
          sizes="100vw"
        />
      </StArticleSeriesProducCaseImage>
      <StArticleSeriesProducCaseImage>
        <Image
          src={ImageSeriesCase3}
          alt="핏어팻 케이스 디테일"
          fill
          sizes="100vw"
        />
      </StArticleSeriesProducCaseImage>
    </StArticleSeriesProduct>
  );
};

export default ArticleSeriesProduct;

const StArticleSeriesProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const StArticleSeriesProductTitle = styled.p`
  margin-top: 10rem;

  color: ${({ theme }) => theme.colors.zw_black};
  font-family: var(--font-pretendard-medium);
  font-size: 2rem;
  font-style: normal;
  line-height: 3rem; /* 150% */
  letter-spacing: -0.03rem;
`;

const StArticleSeriesProductFirstDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;
const StArticleSeriesProductSecondDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-bottom: 5rem;
`;

const StArticleSeriesProductDesc = styled.p`
  color: ${({ theme }) => theme.colors.zw_darkgray};
  font-family: var(--font-gmarketsans-light);
  font-size: 1.5rem;
  font-style: normal;
  line-height: 2.4rem; /* 160% */
  letter-spacing: -0.03rem;
`;

const StArticleSeriesProductLink = styled.button`
  margin-top: 2.4rem;

  border-bottom: 0.1rem solid #939393;

  color: #939393;
  font-family: var(--font-pretendard-medium);
  font-size: 1.4rem;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.03rem;
`;

const StArticleSeriesProductImage = styled.div`
  position: relative;
  width: 100%;
`;

const StArticleSeriesProductFirstImage = styled(StArticleSeriesProductImage)`
  margin: 2rem 0;
  aspect-ratio: 1.8/1;
`;

const StArticleSeriesProductMainImage = styled(StArticleSeriesProductImage)`
  margin: 2rem 0;
  aspect-ratio: 1.1/1;
`;

const StArticleSeriesProducSweatImage = styled(StArticleSeriesProductImage)`
  aspect-ratio: 1.5/1;

  & + & {
    margin-top: 1rem;
  }
`;

const StArticleSeriesProducCaseImage = styled(StArticleSeriesProductImage)`
  aspect-ratio: 1.3/1;
  & + & {
    margin-top: 1rem;
  }

  &:last-child {
    margin-bottom: 20rem;
  }
`;
