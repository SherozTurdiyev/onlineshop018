import React from 'react';
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './App.css'
function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    // autoplay:true,
    // autoplaySpeed:1000,
    centerMode:true,
  };

  return (
    <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
           <img width={350} height={350} src="https://static.dw.com/image/64142948_804.jpg" alt="" />
          </div>
          <div>
           <img width={350} height={350} src="https://www.aljazeera.com/wp-content/uploads/2022/12/SSS10794_1-1.jpg?resize=1800%2C1328" alt="" />
          </div>
          <div>
            <img width={350} height={350} src="https://ca-times.brightspotcdn.com/dims4/default/422c966/2147483647/strip/true/crop/4522x3016+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F45%2F2e%2Fd7e364fe42a6889aeb460dba2efe%2Fwcup-argentina-france-soccer-39095.jpg" alt="" />
          </div>
          <div>
            <img width={350} height={350} src="https://ca-times.brightspotcdn.com/dims4/default/422c966/2147483647/strip/true/crop/4522x3016+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F45%2F2e%2Fd7e364fe42a6889aeb460dba2efe%2Fwcup-argentina-france-soccer-39095.jpg" alt="" />
          </div>
          <div>
            <img width={350} height={350} src="https://ca-times.brightspotcdn.com/dims4/default/422c966/2147483647/strip/true/crop/4522x3016+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F45%2F2e%2Fd7e364fe42a6889aeb460dba2efe%2Fwcup-argentina-france-soccer-39095.jpg" alt="" />
          </div>
          <div>
            <img width={350} height={350} src="https://ca-times.brightspotcdn.com/dims4/default/422c966/2147483647/strip/true/crop/4522x3016+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F45%2F2e%2Fd7e364fe42a6889aeb460dba2efe%2Fwcup-argentina-france-soccer-39095.jpg" alt="" />
          </div>
        </Slider>
      </div>

  )
}

export default App;
