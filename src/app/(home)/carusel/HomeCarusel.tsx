'use client';

import { styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import CarouselFirst from './CarouselFirst';
import CarouselSecond from './CarouselSecond';
import CarouselLast from './CarouselLast';

const HomeCarusel = () => (
  <StHomeCarusel>
    <Swiper
      spaceBetween={20}
      slidesPerView={1.1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <StHomeCaruselItem>
          <CarouselFirst />
        </StHomeCaruselItem>
      </SwiperSlide>
      <SwiperSlide>
        <CarouselSecond />
      </SwiperSlide>
      <SwiperSlide>
        <StHomeCaruselItem>
          <CarouselLast />
        </StHomeCaruselItem>
      </SwiperSlide>
    </Swiper>
  </StHomeCarusel>
);
export default HomeCarusel;

const StHomeCarusel = styled.div`
  margin-top: 1.2rem;
  padding-left: 2rem;
`;
const StHomeCaruselItem = styled.div`
  position: relative;

  width: 100%;

  border: 0.1rem solid #eaeaea;
  aspect-ratio: 1/1.53;
`;
