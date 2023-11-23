import Image from 'next/image';
import { styled } from 'styled-components';
import {
  ImageCarouselSecond,
  ImageCarouselText,
} from '../../../../public/images';

const CarouselSecond = () => (
  <StCarouselSecond>
    <Image
      src={ImageCarouselText}
      alt="두번째 이미지 텍스트"
      fill
      style={{ position: 'absolute', zIndex: 10 }}
    />
    <Image src={ImageCarouselSecond} alt="두번째 이미지" fill />
  </StCarouselSecond>
);

export default CarouselSecond;

const StCarouselSecond = styled.div`
  position: relative;

  width: 100%;

  border: 0.1rem solid #eaeaea;
  aspect-ratio: 1/1.53;
`;
