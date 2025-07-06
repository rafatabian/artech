import "./HomePachete.css"
import { Link } from "react-router-dom"
import { FaRocket, FaStar } from "react-icons/fa6"
import { ImArrowUpRight2 } from "react-icons/im"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

const HomePachete = () => {
  const [t] = useTranslation("global")

  return (
    <div className="homePachete_background">
      <motion.div 
      className="homePachete_container"
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
      <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >{t("home_intro_first_btn")}</motion.h1>
      <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >All in One Plans, No Hidden Fees</motion.h2>
      
      <motion.div
              className="homePachete_cards" 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
        <div className="homePachete_first_card">
         <span>STARTER <ImArrowUpRight2 /></span>
         <span className="homePachetete_text">- Logo design</span> 
         <span className="homePachetete_text">- Free domain name</span>
         <span className="homePachetete_text">- One page custom website</span>
         <span className="homePachetete_text">- Social media setup</span>
        </div>
        <div className="homePachete_second_card">
         <span>STANDARD <FaRocket/></span>
         <span className="homePachetete_text">- 2 Custom logos</span>
         <span className="homePachetete_text">- 3 Pages website</span>
         <span className="homePachetete_text">- Performance optimisation</span>
         <span className="homePachetete_text">- Business card design</span>
         <span className="homePachetete_text">- 2 weeks marketing campain</span>
         <span className="homePachetete_text">- 2 weeks content creation</span>

        </div>
        <div className="homePachete_third_card">
         <span>PRO <FaStar /></span>
         <span className="homePachetete_text">- 3 Custom Logos</span>
         <span className="homePachetete_text">- 5 Pages Website</span>
         <span className="homePachetete_text">- SEO & Performance optimisation</span>
         <span className="homePachetete_text">- Free maintentace for 4 weeks</span>
         <span className="homePachetete_text">- 4 weeks marketing campain</span>
         <span className="homePachetete_text">- Traffic and performance reports</span>
         <span className="homePachetete_text">- Content for ads (photo/video)</span>

        </div>
    </motion.div>
    <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
    <Link to="/plans" aria-label="pachete" className="home_plans_btn">Discover Plans</Link>  
    </motion.div>
    </motion.div>
    </div>
  )
}

export default HomePachete