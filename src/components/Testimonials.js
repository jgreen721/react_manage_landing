import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import CarouselRow from "./CarouselRow";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res.users);
        setTestimonials(res.users);
      });
  }, []);
  return (
    <div className="testimonial-parent">
      <h1 className="testimonial-header">What they've said</h1>
      <div className="testimonial-row">
        {testimonials.map((t, i) => (
          <TestimonialCard data={t} key={t.id} idx={i} />
        ))}
      </div>
      <div className="carousel-row">
        {<CarouselRow testimonials={testimonials} />}
      </div>

      <div className="center">
        <button className="btn started-btn">Get Started</button>
      </div>
    </div>
  );
};

export default Testimonials;
