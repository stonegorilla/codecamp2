import Slider from "react-slick";
// import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Wrapper,
  SliderImage1,
  SliderImage2,
  SliderImage3,
  SliderImage4,
} from "./LayoutBanner.styles";

export default function LayoutBannerUI(props) {
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
          <img
            src={`https://storage.googleapis.com/${props.best?.fetchUseditemsOfTheBest[0].images[0]}`}
          />
        </SliderImage1>
        <SliderImage2>
          <img
            src={`https://storage.googleapis.com/${props.best?.fetchUseditemsOfTheBest[1].images[0]}`}
          />
        </SliderImage2>
        <SliderImage3>
          <img
            src={`https://storage.googleapis.com/${props.best?.fetchUseditemsOfTheBest[2].images[0]}`}
          />
        </SliderImage3>
        <SliderImage4>
          <img
            src={`https://storage.googleapis.com/${props.best?.fetchUseditemsOfTheBest[3].images[0]}`}
          />
        </SliderImage4>

        {/* 예네들을 안쪽에 옮길 수 있는 방법은 없나  */}
        {/* https://react-slick.neostack.com/docs/example/custom-paging/ */}
      </Slider>
    </Wrapper>
  );
}
