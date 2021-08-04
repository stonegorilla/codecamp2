import Slider from "react-slick";
import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Wrapper,
  SliderImage1,
  SliderImage2,
  SliderImage3,
  SliderImage4,
  SliderImage5,
  SliderImage6,
} from "./LayoutBanner.styles";

export default function LayoutBannerUI() {
  const settings = {
    dots: false,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 100,
    pauseOnHover: false,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <SliderImage1>
          <h1>FREEBOARD</h1>
        </SliderImage1>
        <SliderImage2>
          <h1>MARKET</h1>
        </SliderImage2>
        <SliderImage3>
          <h1>MYPAGE</h1>
        </SliderImage3>
        <SliderImage4>
          <h1>RANDOMALGORITHM</h1>
        </SliderImage4>
        <SliderImage5>
          <h1>DATABASE</h1>
        </SliderImage5>
        <SliderImage6>
          <h1>CODECAMP</h1>
        </SliderImage6>
        {/* 예네들을 안쪽에 옮길 수 있는 방법은 없나  */}
        {/* https://react-slick.neostack.com/docs/example/custom-paging/ */}
      </Slider>
    </Wrapper>
  );
}
