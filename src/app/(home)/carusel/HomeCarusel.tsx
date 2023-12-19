'use client';

import { styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import CarouselFirst from './CarouselFirst';
import CarouselSecond from './CarouselSecond';
import CarouselLast from './CarouselLast';

const HomeCarusel = () => {
  const router = useRouter();

  return (
    <StHomeCarusel>
      <Swiper
        spaceBetween={12}
        slidesPerView={1.2}
        centeredSlides
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        modules={[Autoplay]}
      >
        <SwiperSlide onClick={() => router.push('/event')}>
          <StHomeCaruselItem>
            <CarouselFirst />
          </StHomeCaruselItem>
        </SwiperSlide>
        <SwiperSlide onClick={() => router.push('/product/season/14')}>
          <CarouselSecond />
        </SwiperSlide>
        <SwiperSlide onClick={() => router.push('/product/season/7')}>
          <StHomeCaruselItem>
            <CarouselLast />
          </StHomeCaruselItem>
        </SwiperSlide>
        <SwiperSlide onClick={() => router.push('/event')}>
          <StHomeCaruselItem>
            <CarouselFirst />
          </StHomeCaruselItem>
        </SwiperSlide>
        <SwiperSlide onClick={() => router.push('/product/season/14')}>
          <CarouselSecond />
        </SwiperSlide>
        <SwiperSlide onClick={() => router.push('/product/season/7')}>
          <StHomeCaruselItem>
            <CarouselLast />
          </StHomeCaruselItem>
        </SwiperSlide>
      </Swiper>
    </StHomeCarusel>
  );
};
export default HomeCarusel;

const StHomeCarusel = styled.div`
  margin-top: 1.2rem;
`;
const StHomeCaruselItem = styled.div`
  position: relative;

  width: 100%;

  border: 0.1rem solid #eaeaea;
  aspect-ratio: 1/1.53;
`;
