import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";

const CarouselRow = ({ testimonials }) => {
  const [counter, setCounter] = useState(0);

  return testimonials.length ? (
    <div className="carousel-row">
      <TestimonialCard data={testimonials[counter]} key={counter} idx={1} />
      <div className="center">
        <div className="small-screen-scroll">
          <div onClick={() => setCounter(0)} className="dot dot1"></div>
          <div onClick={() => setCounter(1)} className="dot dot2"></div>
          <div onClick={() => setCounter(2)} className="dot dot3"></div>
          <div onClick={() => setCounter(3)} className="dot dot4"></div>
        </div>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default CarouselRow;
