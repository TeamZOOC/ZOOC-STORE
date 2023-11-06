'use client';

import { styled } from 'styled-components';
import Image from 'next/image';
import { CAROUSEL_LIST } from '@/mocks/carouselData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HomeCarusel = () => (
  <StHomeCarusel>
    <Swiper spaceBetween={20} slidesPerView={1.1} loop>
      {CAROUSEL_LIST.map(({ id, imgSrc, imgAlt }) => (
        <SwiperSlide key={id}>
          <StHomeCaruselItem>
            <Image src={imgSrc} alt={imgAlt} fill priority sizes="50%" />
          </StHomeCaruselItem>
        </SwiperSlide>
      ))}
    </Swiper>
  </StHomeCarusel>
);
export default HomeCarusel;

const StHomeCarusel = styled.div`
  margin-top: 1.6rem;
  padding-left: 2rem;
`;
const StHomeCaruselItem = styled.div`
  position: relative;

  width: 100%;

  aspect-ratio: 1/1.53;
`;
