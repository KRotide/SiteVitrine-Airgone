import React, { useState } from "react";

import image1 from "../../assets/images/slides/joyeuxChaos.jpg";
import image2 from "../../assets/images/slides/lEnvie.jpg";
import image3 from "../../assets/images/slides/brutal.jpg";

export default function Slides() {
  const slides = [{ src: image1 }, { src: image2 }, { src: image3 }];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="slides" id="slides">
      <h2>Diapo</h2>
      <div className="slides__content">
        {slides.map((image, index) => (
          <div
            key={index}
            className={`slides__content__image ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={image.src} alt="" />
          </div>
        ))}
        <div className="slides__content__bulletPoints">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`slides__content__bulletPoints__dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
        <span className="slides__content__arrowLeft" onClick={prevSlide}>
          &lt;
        </span>
        <span className="slides__content__arrowRight" onClick={nextSlide}>
          &gt;
        </span>
      </div>
    </section>
  );
}
