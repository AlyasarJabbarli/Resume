import TestimonalCard from "../../components/testimonalCard/TestimonalCard";
import React, { useState, useEffect } from "react";
import './style.css'
import './responsive.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

function Carousel({testimonals}) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const step = 3;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => currentIndex > testimonals.length ? 0 : (currentIndex + 1) % testimonals.length);
      setActiveDot(activeDot => activeDot === Math.round(testimonals.length / 3) ? 0 : (currentIndex + 1) % testimonals.length);
      console.log('before');
    }, 4000);
    console.log('after');
    return () => clearInterval(intervalId);
  }, [testimonals.length,currentIndex]);

  const handlePrevClick = () => {
    setActiveDot(activeDot < 3 ? testimonals.length - 1 : activeDot - 1 * step);
    setCurrentIndex(currentIndex < 1 ?testimonals.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setActiveDot(activeDot >= testimonals.length - step  ? 0 : activeDot + 1 * step);
    setCurrentIndex(currentIndex >= testimonals.length - 1 ? 0 : currentIndex + 1 );
  };

  const handleDotClick = index => {
    setCurrentIndex(index * step);
    setActiveDot(index);
  };

  const translateX = - currentIndex * 273;
  // console.log(activeDot, currentIndex);
  
  // console.log(currentIndex + 1 * 3 , slides.length - 3);

  return (
    <div className="carousel">
      <div className="carousel_all">
      <div className="slides" style={{ transform: `translateX(${translateX}px)` }}>
        {testimonals.map((testimonal, index) => (
          <TestimonalCard key={index} img={testimonal.image} fullName={testimonal.fullName} job={testimonal.job} comment={testimonal.comment}/>
        ))}
      </div>
      
      </div>
      <button className="prev" onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faArrowLeft}/>
      </button>
      <button className="next" onClick={handleNextClick}>
          <FontAwesomeIcon icon={faArrowRight}/>
      </button>
      <div className="dots">
        {testimonals.filter((_, index) => index % step === 0).map((card, index) => (
          <span
            key={card.id}
            className={`dot ${index % step === 0 ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div> 
    </div>
  );
}
const mapStateToProps = (state) => ({
  testimonals: state.Data.testimonals,
});
export default connect(mapStateToProps)(Carousel);