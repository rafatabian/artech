import "./MarkeMotivational.css"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import marketing_motivational_img from "../../../assets/images/marketing/marke_motiviational.webp"

const MarkeMotivational = () => {
  return (
    <div className="marke_motivational_background">
      <motion.div
              className="marke_motivational"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.3 }}
            >
        <img src={marketing_motivational_img} alt="starting project" />
        <div className="marke_motiovational_text">
            <h1>Let’s Grow Your Business Together</h1>
            <h2>You’ve seen what we do and how we do it. Now it’s your turn.</h2>
            <Link to="/contact" aria-label="contact">Start</Link>
        </div>
            </motion.div>
    </div>
  )
}

export default MarkeMotivational