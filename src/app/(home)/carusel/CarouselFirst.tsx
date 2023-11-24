import Image from 'next/image';
import { ImageCarouselFirst } from '../../../../public/images';

const CarouselFirst = () => (
  <Image
    src={ImageCarouselFirst}
    alt="첫번째 이미지"
    fill
    priority
    sizes="100vw"
  />
);

export default CarouselFirst;
