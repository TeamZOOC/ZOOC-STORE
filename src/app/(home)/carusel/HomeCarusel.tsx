'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from 'styled-components';
import Image from 'next/image';
import { CAROUSEL_LIST } from '@/mocks/carouselData';

const HomeCarusel = () => {
  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {CAROUSEL_LIST.map(({ id, imgSrc, imgAlt }) => (
        <StHomeCaruselItem key={id}>
          <Image src={imgSrc} alt={imgAlt} fill priority />
        </StHomeCaruselItem>
      ))}
    </Slider>
  );
};

export default HomeCarusel;

const StHomeCaruselItem = styled.div`
  position: relative;

  aspect-ratio: 1/1.53;
`;
