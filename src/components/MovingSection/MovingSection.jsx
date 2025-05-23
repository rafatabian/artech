import "./MovingSection.css"
import { useEffect, useRef } from "react";

const MovingSection = ({props}) => {
  const scrollRef = useRef(null);
  const directionRef = useRef(1);
  //seconde moving section
  const secondScrollRef = useRef(null);

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
    <div className="moving_section_container"> 
        <h1>Tech we use:</h1>
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
  )
}

export default MovingSection