import Slider from "react-slick";
import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wrapper, SliderImage1, SliderImage2 } from "./LayoutBanner.styles";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <SliderImage1></SliderImage1>
        <SliderImage2></SliderImage2>
        <SliderImage1></SliderImage1>
        <SliderImage2></SliderImage2>
        <SliderImage1></SliderImage1>
        <SliderImage2></SliderImage2>
        {/* 예네들을 안쪽에 옮길 수 있는 방법은 없나  */}
        {/* https://react-slick.neostack.com/docs/example/custom-paging/ */}
      </Slider>
    </Wrapper>
  );
}
