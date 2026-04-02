import React, { useEffect, useState } from "react";
import "./AdSlider.css";

const images = [
  "/images/ad1.png",
  "/images/ad2.png",
  "/images/ad3.png",
  "/images/ad4.png",
  "/images/ad5.png",
];

const AdSlider = () => {
  const [index, setIndex] = useState([]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-box">
      <img src={images[index]} className="slider-image" />

      <button className="arrow-btn prev-btn" onClick={prevSlide}>
        ‹
      </button>

      <button className="arrow-btn next-btn" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default AdSlider;