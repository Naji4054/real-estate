import React, { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";



function Carousel({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true
  };

  const sliderRef = useRef(null);

   // Function to handle the "Prev" button click
   const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Function to handle the "Next" button click
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };


  return (
    <div className="slider-container relative" >
      <Slider {...settings} ref={sliderRef}>
       {children}
      </Slider>
      <div className="buttonGroup flex justify-between absolute w-full top-[42%] px-2">
        <ArrowLeftCircleIcon className="w-10 h-10 text-[#ff5a3c]" onClick={handlePrev}/>
        <ArrowRightCircleIcon className="w-10 h-10 text-[#ff5a3c]" onClick={handleNext}/>
      </div>
    </div>
  );
}

export default Carousel;
