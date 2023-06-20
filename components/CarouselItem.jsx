import React from "react";

const CarouselItem = ({ image,text }) => {
  return (
    <div>
      <div className="shadow slide-item transition-all ">
        <img src={image} className="object-cover min-h-screen rounded overflow-hidden" alt="car" />
        <h1 className="text-white">{text}</h1>
      </div>
    </div>
  );
};

export default CarouselItem;
