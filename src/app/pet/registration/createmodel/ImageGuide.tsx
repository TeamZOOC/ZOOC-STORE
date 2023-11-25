import Image from 'next/image';
import { styled } from 'styled-components';

import {
  ImageCorrect1,
  ImageCorrect2,
  ImageCorrect3,
  ImageWrong1,
  ImageWrong2,
  ImageWrong3
} from '../../../../../public/images';

const ImageGuide = () => (
  <StImageGuide>
    <h2>반려동물의 사진을 선택해주세요</h2>
    <p>최적의 학습을 위해 아래 기준을 추천드려요</p>
    <StHr />
    <StGuides>
      <StGuideText>
        비슷한 자세의 <span>정면 사진들</span>이 가장 좋아요
      </StGuideText>
      <StImageEx>
        <Image src={ImageCorrect1} alt="적절한 이미지 예시 1" priority />
        <Image src={ImageCorrect2} alt="적절한 이미지 예시 2" priority />
        <Image src={ImageCorrect3} alt="적절한 이미지 예시 3" priority />
      </StImageEx>
      <StGuideDescription>
        한 마리의 사진으로만 8 - 15장을 업로드 해주세요
      </StGuideDescription>
    </StGuides>
    <StGuides>
      <StGuideText>아래 경우의 사진들은 AI 인식이 어려워요</StGuideText>
      <StImageEx>
        <StImageWithCaption>
          <Image src={ImageWrong1} alt="부적절한 이미지 예시 1" priority />
          <figcaption>안 좋은 화질</figcaption>
        </StImageWithCaption>
        <StImageWithCaption>
          <Image src={ImageWrong2} alt="부적절한 이미지 예시 2" priority />
          <figcaption>옷을 입은 사진</figcaption>
        </StImageWithCaption>
        <StImageWithCaption>
          <Image src={ImageWrong3} alt="부적절한 이미지 예시 3" priority />
          <figcaption>입을 벌린 사진</figcaption>
        </StImageWithCaption>
      </StImageEx>
    </StGuides>
  </StImageGuide>
);

export default ImageGuide;

const StImageGuide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 3.8rem;
  margin-bottom: 18.7rem;

  & > h2 {
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }
  & > p {
    margin-bottom: 3rem;

    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body1};
  }
`;

const StHr = styled.hr`
  width: 100%;

  ${({ theme }) => theme.colors.zw_brightgray};
`;

const StGuides = styled.div`
  padding-top: 3rem;

  text-align: center;
`;

const StGuideText = styled.strong`
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Body1};

  & > span {
    color: ${({ theme }) => theme.colors.zw_point};
  }
`;

const StGuideDescription = styled.p`
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.colors.zw_gray};
  ${({ theme }) => theme.fonts.zw_Body2};
`;

const StImageEx = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  padding: 1.6rem 0 1rem 0;
`;

const StImageWithCaption = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & > figcaption {
    color: ${({ theme }) => theme.colors.zw_gray};
    ${({ theme }) => theme.fonts.zw_Body2};
  }
`;
