import React, { useRef } from "react";
import Slider from "react-slick";
// import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
// import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";



function Carousel({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: false,
    autoplay: true,        // enable autoplay
    autoplaySpeed: 2000,   // 2 seconds per slide
    pauseOnHover: true 
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
      {/* <div className="relative">
        <ArrowLeftCircleIcon className="w-10 h-10 text-[#f46850] absolute top-[-251px] left-[-3%]" onClick={handlePrev}/>
        <ArrowRightCircleIcon className="w-10 h-10 text-[#ff5a3c] absolute top-[-251px] right-[-3%]" onClick={handleNext}/>
      </div> */}
    </div>
  );
}

export default Carousel;
