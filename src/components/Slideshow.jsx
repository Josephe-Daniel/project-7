import React, { useState } from "react";
import leftArrow from "../img/VectorLeft.svg";
import rightArrow from "../img/VectorRight.svg";

const Slideshow = (data) => {
  // Setting initial state of Slideshow index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Setting previous picture change
  const previousPicture = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Setting next picture change
  const nextPicture = () => {
    const isLastSlide = currentIndex === data.data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slideshow_container">
      {/* If data length > 1, display the arrows */}
      {data.data.length > 1 && (
        <>
          <img
            src={leftArrow}
            alt=""
            className="slideshow_container_arrow leftArrow"
            onClick={previousPicture}
          />
          <img
            src={rightArrow}
            alt=""
            className="slideshow_container_arrow rightArrow"
            onClick={nextPicture}
          />
        </>
      )}
      {/* Display the index of the picture in slideshow */}
      <div className="slideshow_container_pictures">
        <img src={data.data[currentIndex]} alt="" />
      </div>
      <div className="slideshow_container_numbers">
        <p>{currentIndex + 1 + "/" + data.data.length}</p>
      </div>
    </div>
  );
};

export default Slideshow;
