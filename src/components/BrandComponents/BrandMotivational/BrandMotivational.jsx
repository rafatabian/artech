import "../../MarkeComponents/MarkeMotivational/MarkeMotivational.css"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import brannd_motivational_img from "../../../assets/images/branding/brand_motivational.webp"
const BrandMotivational = () => {
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
        <img src={brannd_motivational_img} alt="starting project" />
        <div className="marke_motiovational_text">
            <h1>Turn Your Vision Into a Brand People Remember</h1>
            <h2>You’ve seen the results we deliver—now it’s time to create yours.</h2>
            <Link to="/contact" aria-label="contact">Start</Link>
        </div>
            </motion.div>
    </div>
  )
}

export default BrandMotivational