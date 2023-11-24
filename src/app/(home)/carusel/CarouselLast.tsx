import Image from 'next/image';
import { ImageCarouselLast } from '../../../../public/images';

const CarouselLast = () => (
  <Image src={ImageCarouselLast} alt="마지막 이미지" fill />
);

export default CarouselLast;
