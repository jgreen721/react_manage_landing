import React, { useEffect, useRef, useState } from "react";

const TestimonialCard = ({ data, idx }) => {
  console.log("testimonial card");
  return data.img ? (
    <div className={idx === 3 ? "hide-card" : "testimonial-card"}>
      <img className="testimonial-img" src={data.img} alt="" />
      <h4 className="testimonial-h4">{data.name}</h4>
      <p className="testimonial-p">{data.blurb}</p>
    </div>
  ) : (
    "Loading"
  );
};

export default TestimonialCard;
