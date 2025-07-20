import "./MovingSection.css"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const MovingSection = ({props}) => {
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
      <motion.div className="moving_section_container">
          <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
         viewport={{ once: true}}
      >Tools</motion.h2>
          <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
         viewport={{ once: true}}
      >Cutting-edge tools for exceptional results</motion.p>
      <motion.div
      className="moving_section_animation_container"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.3 }}
            >
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
            </motion.div>
    </motion.div>
    </div>
  )
}

export default MovingSection