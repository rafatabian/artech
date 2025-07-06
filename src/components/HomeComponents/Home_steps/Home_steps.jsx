import "./Home_steps.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home_steps = () => {
  return (
    <div className="home_steps_background">
      <motion.div 
      className="home_steps_container"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>
       <div className="home_steps_titles">
        <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >Simple, Clear Process to Get You Online</motion.h1>
        <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >All-in-One Setup, designed to Make You Stand Out</motion.h2>
       </div>
       <motion.div
              className="home_steps_step_container"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >

        {/* step 1 */}
         <div className="home_steps_step">
            <h2>1</h2>
            <p>Book a free consultation</p>
         </div>
         <div className="home_steps_step_svg">
            <FaLongArrowAltRight />
         </div>
         {/* step 2 */}
         <div className="home_steps_step">
            <h2>2</h2>
            <p>Pick your package</p>
         </div>
         <div className="home_steps_step_svg">
            <FaLongArrowAltRight />
         </div>
         {/* step 3 */}
         <div className="home_steps_step">
            <h2>3</h2>
            <p>We create everightng for you</p>
         </div>
         <div className="home_steps_step_svg">
            <FaLongArrowAltRight />
         </div>
         {/* step 4 */}
         <div className="home_steps_step">
            <h2>4</h2>
            <p>You go live & grow</p>
         </div>
         </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
      <Link className="steps_start" to="/contact">Start</Link>
      </motion.div>
      </motion.div>
    </div>
  )
}

export default Home_steps