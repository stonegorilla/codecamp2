import Slider from "react-slick";
import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Wrapper,
  SliderImage1,
  SliderImage2,
  SliderImage3,
} from "./LayoutBanner.styles";

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
        <SliderImage1>
          <h3>Carrot MarketWSlide</h3>
        </SliderImage1>
        <SliderImage2>
          <h3>Carrot MarketWSlide</h3>
        </SliderImage2>
        <SliderImage3>
          <h3>Carrot MarketWSlide</h3>
        </SliderImage3>
        <SliderImage1>
          <h3>Carrot MarketWSlide</h3>
        </SliderImage1>
        <SliderImage2>
          <h3>Carrot MarketWSlide</h3>
        </SliderImage2>
        <SliderImage3>
          <h3>Carrot MarketWSlide</h3>
        </SliderImage3>
        {/* 예네들을 안쪽에 옮길 수 있는 방법은 없나  */}
        {/* https://react-slick.neostack.com/docs/example/custom-paging/ */}
      </Slider>
    </Wrapper>
  );
}

// export default class LayoutBannerUI extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       appendDots: (dots) => (
//         <div
//           style={{
//             backgroundColor: "#ddd",
//             borderRadius: "10px",
//             padding: "10px",
//           }}
//         >
//           <ul style={{ margin: "0px" }}> {dots} </ul>
//         </div>
//       ),
//       customPaging: (i) => (
//         <div
//           style={{
//             width: "30px",
//             color: "blue",
//             border: "1px blue solid",
//           }}
//         >
//           {i + 1}
//         </div>
//       ),
//     };
//     return (
//       <div>
//         <h2>Append Dots</h2>
//         <Slider {...settings}>
//           <SliderImage1></SliderImage1>
//           <SliderImage2></SliderImage2>
//           <SliderImage1></SliderImage1>
//           <SliderImage2></SliderImage2>
//           <SliderImage1></SliderImage1>
//           <SliderImage2></SliderImage2>
//         </Slider>
//       </div>
//     );
//   }
// }
