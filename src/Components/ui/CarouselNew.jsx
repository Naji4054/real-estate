import React from "react";
import Slider from "react-slick";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";


function SliderComponent({children ,settings}) {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3

  };


  const sliderSettings = {...defaultSettings, ...settings}
  return (
    <div className="slider-container">
      <Slider {...sliderSettings}>
        {children}
      </Slider>
    </div>
  );
}

export default SliderComponent;
