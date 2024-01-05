/* eslint-disable react/no-array-index-key */

'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { REVIEW } from '@/constants/review';

import { IcBack, IcSwiperNext } from '../../../../public/icons';

const HomeReview = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const router = useRouter();
  return (
    <StHomeReview>
      <StSwiperTopWrapper>
        <span>리뷰</span>
        <div>
          <StSwiperButton type="button" onClick={() => swiper?.slidePrev()}>
            <IcBack />
          </StSwiperButton>
          <StSwiperButton type="button" onClick={() => swiper?.slideNext()}>
            <IcSwiperNext />
          </StSwiperButton>
        </div>
      </StSwiperTopWrapper>
      <Swiper
        modules={[Navigation]}
        loop
        onSwiper={(s) => {
          if (s) {
            setSwiper(s);
          }
        }}
      >
        {REVIEW.map((review) => (
          <SwiperSlide key={review.id}>
            {review.imageSrc.length === 1 ? (
              <StHomeReviewItem onClick={() => router.push(review.productLink)}>
                <Image
                  src={review.imageSrc[0]}
                  alt="리뷰 이미지"
                  fill
                  sizes="100vw"
                  priority
                />
              </StHomeReviewItem>
            ) : (
              <Swiper
                loop
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
              >
                {review.imageSrc.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    onClick={() => router.push(review.productLink)}
                  >
                    <StHomeReviewItem>
                      <Image
                        src={image}
                        alt="리뷰 이미지"
                        fill
                        sizes="100vw"
                        priority
                      />
                    </StHomeReviewItem>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            <StSwiperItemReviewTitle>
              <StSwiperItemReviewName>
                {review.reviewTitle}
              </StSwiperItemReviewName>
              <StSwiperItemReviewProduct>
                {review.reviewDesc}
              </StSwiperItemReviewProduct>
            </StSwiperItemReviewTitle>
          </SwiperSlide>
        ))}
      </Swiper>
    </StHomeReview>
  );
};

export default HomeReview;

const StHomeReview = styled.div`
  position: relative;

  width: 100%;
  margin-top: 7rem;

  .swiper-pagination {
    position: absolute;
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.zw_black};
  }
`;

const StHomeReviewItem = styled.div`
  position: relative;

  width: 100%;

  aspect-ratio: 1/1;
`;

const StSwiperTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  span {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }
`;
const StSwiperButton = styled.button``;

const StSwiperItemReviewTitle = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const StSwiperItemReviewName = styled.span`
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead3};
`;
const StSwiperItemReviewProduct = styled.span`
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Body1};
`;
