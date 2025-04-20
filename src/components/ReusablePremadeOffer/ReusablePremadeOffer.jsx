import React, { useEffect, useRef, useState } from 'react';
import './ReusablePremadeOffer.css';
import { useLocation } from 'react-router-dom';


const PremadeShowcase = ({ images }) => {
  const [webpage, setWebpage] = useState(false)
  const location = useLocation();

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 320;
    if (direction === 'left') {
      scrollRef.current.scrollLeft -= scrollAmount;
    } else {
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  //changing background based on the page
  useEffect(() => {
    setWebpage(location.pathname === '/websites');
  }, [location.pathname]);

  return (
    <div className="premade_main_container">
    <div className="premade-container" style={{ backgroundColor: webpage ? '#1c1c1cc4' : '#eeeeeeeb' }}>
        <div className="premade-wrapper">
        <button className="scroll-arrow left" onClick={() => scroll('left')}>&#10094;</button>

        <div className="premade-scroll" ref={scrollRef}>
          {images.map((img, index) => (
            <div className="premade-image-wrapper" key={index}>
              <img src={img} alt={`Premade design ${index + 1}`} className="premade-image" />
              <button className="claim-btn">Claim This Design</button>
            </div>
          ))}
        </div>

        <button className="scroll-arrow right" onClick={() => scroll('right')}>&#10095;</button>
      </div>

    </div>
    </div>
  );
};

export default PremadeShowcase;
