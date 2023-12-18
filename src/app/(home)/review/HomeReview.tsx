import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { REVIEW } from '@/constants/review';
import { useRouter } from 'next/navigation';
import { IcBack, IcSwiperNext } from '../../../../public/icons';

const HomeReview = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const router = useRouter();
  return (
    <StHomeReview>
      <SwiperTopWrapper>
        <span>리뷰</span>
        <div>
          <SwiperButton onClick={() => swiper?.slidePrev()}>
            <IcBack />
          </SwiperButton>
          <SwiperButton onClick={() => swiper?.slideNext()}>
            <IcSwiperNext />
          </SwiperButton>
        </div>
      </SwiperTopWrapper>
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
          <SwiperSlide
            key={review.id}
            onClick={() => router.push(review.productLink)}
          >
            {review.imageSrc.length === 1 ? (
              <StHomeReviewItem>
                <Image
                  src={review.imageSrc[0]}
                  alt="리뷰 이미지"
                  fill
                  sizes="100vw"
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
                {review.imageSrc.map((image) => (
                  <SwiperSlide>
                    <StHomeReviewItem>
                      <Image
                        src={image}
                        alt="리뷰 이미지"
                        fill
                        sizes="100vw "
                      />
                    </StHomeReviewItem>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            <SwiperItemReviewTitle>
              <SwiperItemReviewName>{review.reviewTitle}</SwiperItemReviewName>
              <SwiperItemReviewProduct>
                {review.reviewDesc}
              </SwiperItemReviewProduct>
            </SwiperItemReviewTitle>
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

const SwiperTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  span {
    color: ${({ theme }) => theme.colors.zw_black};
    ${({ theme }) => theme.fonts.zw_Subhead1};
  }
`;
const SwiperButton = styled.button``;

const SwiperItemReviewTitle = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const SwiperItemReviewName = styled.span`
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Subhead3};
`;
const SwiperItemReviewProduct = styled.span`
  color: ${({ theme }) => theme.colors.zw_black};
  ${({ theme }) => theme.fonts.zw_Body1};
`;
