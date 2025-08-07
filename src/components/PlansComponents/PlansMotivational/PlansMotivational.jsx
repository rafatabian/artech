import "./PlansMotivational.css"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import plans_motivational from "../../../assets/images/plans/plans_motivational.webp"

const PlansMotivational = () => {
  return (
    <div className="plans_motivational_background">
      <motion.div
              className="plans_motivational"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.3 }}
            >
        <img src={plans_motivational} alt="starting project" />
        <div className="plans_motiovational_text">
            <h1>Ready to Take Your Business to the Next Level?</h1>
            <h2>Choose a plan that fits your goals or if you're unsure, schedule a free consultation and we'll guide you through the best option for your business.</h2>
            <Link to="/contact" aria-label="contact">Start</Link>
        </div>
            </motion.div>
    </div>
  )
}

export default PlansMotivational