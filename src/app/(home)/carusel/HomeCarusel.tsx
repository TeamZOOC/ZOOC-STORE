'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from 'styled-components';

const HomeCarusel = () => {
  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <StHomeCaruselItem1>1</StHomeCaruselItem1>
      <StHomeCaruselItem2>2</StHomeCaruselItem2>
      <StHomeCaruselItem3>3</StHomeCaruselItem3>
    </Slider>
  );
};

export default HomeCarusel;

const StHomeCaruselItem = styled.div`
  width: 100%;
  height: 49rem;
`;

const StHomeCaruselItem1 = styled(StHomeCaruselItem)`
  background-color: #eaeaea;
`;
const StHomeCaruselItem2 = styled(StHomeCaruselItem)`
  background-color: black;
`;
const StHomeCaruselItem3 = styled(StHomeCaruselItem)`
  background-color: blue;
`;
