import React from "react";
import { useState } from "react";
import "./carrousel.css";

const Carrousel = () => {
  const element = ["Background.png", "Background.png"];
  const totalPictures = element.length;

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === totalPictures - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? totalPictures - 1 : current - 1);
  };

  if (element.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <img
        className="left_arrow"
        src={"Previous.png"}
        alt="back"
        onClick={prevSlide}
      />
      <img
        className="right_arrow"
        src={"Next.png"}
        alt="forward"
        onClick={nextSlide}
      />
      {element.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img className="slide-item" src={slide} alt="slide item" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carrousel;
