import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselItem from "./CarouselItem";

const images = [
  { id: 1, src: "/assets/car1.jpg",text:"Car 1" },
  { id: 2, src: "/assets/car2.jpg",text:"Car 2" },
  { id: 3, src: "/assets/car3.jpg",text:"Car 3" },
  { id: 4, src: "/assets/car4.jpg",text:"Car 4" },
  { id: 5, src: "/assets/car5.jpg",text:"Car 5" },
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScrool: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  const renderImages = () =>
    images.map((image, index ) => (
      <CarouselItem key={index} image={image.src} text={image.text} /> 
      
    ));

  return (
    <div className=" flex items-center justify-center">
      <div className="w-full">
        <Slider {...settings}>{renderImages()}</Slider>
      </div>
    </div>
  );
};
export default Carousel;
