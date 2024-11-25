import React, { useState } from "react";

export default function Carousel(props) {
  const { images } = props;
  const [curentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handleBack = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <div>
        <img src={images[curentSlide]} />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}