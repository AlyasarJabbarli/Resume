import TestimonalCard from "../../components/testimonalCard/TestimonalCard";
import React, { useState, useEffect} from "react";
import './style.css'
import './responsive.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";


function Carousel({testimonals}) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const [isClickAllowed, setIsClickAllowed] = useState(true)
  const step = 3;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => currentIndex > testimonals.length ? 0 : (currentIndex + 1) % testimonals.length);
      setActiveDot(activeDot => activeDot === Math.round(testimonals.length / 3) ? 0 : (currentIndex + 1) % testimonals.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [testimonals.length,currentIndex]);

  const handleClick = (direction) => {
    if (isClickAllowed) {
      setIsClickAllowed(false);

      setTimeout(() => {
        setIsClickAllowed(true);
      }, 1500);

      if (direction === "next") {
        setActiveDot(activeDot >= testimonals.length - step  ? 0 : activeDot + 1 * step);
        setCurrentIndex(currentIndex >= testimonals.length - 1 ? 0 : currentIndex + 1 );
      } else {
        setActiveDot(activeDot < 3 ? testimonals.length - 1 : activeDot - 1 * step);
        setCurrentIndex(currentIndex < 1 ?testimonals.length - 1 : currentIndex - 1);
      }
    }
  };

  const handleDotClick = index => {
    setCurrentIndex(index * step);
    setActiveDot(index);
  };

  const translateX = - currentIndex * 273;
  return (
    <div className="carousel">
      <div className="carousel_all">
      <div className="slides" style={{ transform: `translateX(${translateX}px)` }}>
        {testimonals.map((testimonal, index) => (
          <TestimonalCard key={index} img={testimonal.image} fullName={testimonal.fullName} job={testimonal.job} comment={testimonal.comment}/>
        ))}
      </div>
      
      </div>
      <button className="prev" onClick={() => handleClick('prev')}>
          <FontAwesomeIcon icon={faArrowLeft}/>
      </button>
      <button className="next" onClick={() => handleClick('next')}>
          <FontAwesomeIcon icon={faArrowRight}/>
      </button>
      <div className="dots">
        {testimonals.filter((_, index) => index % step === 0).map((card, index) => (
          <span
            key={card.id}
            className={`dot ${index * step === currentIndex || index * step + 1 === currentIndex || index * step + 2 === currentIndex ? "active" : ""}`}
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