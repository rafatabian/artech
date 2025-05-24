import { useLocation } from "react-router-dom";
import "./MovingSection.css"
import { useEffect, useRef } from "react";

const MovingSection = ({props, translation}) => {
  const scrollRef = useRef(null);
  const directionRef = useRef(1);
  //seconde moving section
  const secondScrollRef = useRef(null);
  const location = useLocation();



 useEffect(() => {
  const el = scrollRef.current;
  const secondEl = secondScrollRef.current;

  if (secondEl) {
    secondEl.scrollLeft = secondEl.scrollWidth - secondEl.clientWidth;
  }

  let animationFrameId;

  const scroll = () => {
    if (!el || !secondEl) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;

    const speed = 0.5;

    // Scroll both
    el.scrollLeft += directionRef.current * speed;
    secondEl.scrollLeft -= directionRef.current * speed;

    if (el.scrollLeft + 1 >= maxScrollLeft || el.scrollLeft <= 0) {
      directionRef.current *= -1;
    }

    animationFrameId = requestAnimationFrame(scroll);
  };

  animationFrameId = requestAnimationFrame(scroll);

  return () => cancelAnimationFrame(animationFrameId);
}, []);


  return (
    <div className={location.pathname === "/websites" ? "moving_section_main_container_dark" : "moving_section_main_container"}>
    <div className="moving_section_container"> 
        <span>
          <h2>" {translation[0]}</h2>
          <h2>{translation[1]} "</h2>
        </span>
        <div className="moving_section"  ref={scrollRef}>
            {props.firstSet.map((item, index) => (
                <div key={index} className="moving_section_item">
                    <img src={item.image} alt={item.title} />
                </div>
            ))}
        </div>
        <div className="second_moving_section"  ref={secondScrollRef}>
            {props.secondSet.map((item, index) => (
                <div key={index} className="moving_section_item">
                    <img src={item.image} alt={item.title} />
                </div> 
            ))} 
        </div>
    </div>
    </div>
  )
}

export default MovingSection