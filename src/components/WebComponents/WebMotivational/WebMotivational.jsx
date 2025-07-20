import "./WebMotivational.css"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import web_motivastional_img from "../../../assets/images/websites/web_motivational.webp"

const WebMotivational = () => {
  return (
    <div className="web_motivational_background">
      <motion.div
              className="web_motivational"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.3 }}
            >
        <img src={web_motivastional_img} alt="starting project" />
        <div className="web_motiovational_text">
            <h1>Let's build a website that works for you</h1>
            <Link to="/contact" aria-label="contact">Let's get started</Link>
        </div>
            </motion.div>
    </div>
  )
}

export default WebMotivational