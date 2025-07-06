import "./Home_our_services.css"
import { Link } from "react-router-dom"
import { MdWeb } from "react-icons/md"
import { FaAudioDescription, FaTag, FaBoxesStacked } from "react-icons/fa6"
import { motion } from "framer-motion"

const Home_our_services = () => {


  return (
    <div className="home_our_services_background">
      <motion.div
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
      <div className="home_our_services_container">
       <div className="home_our_services_title_container">

        <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >Explore all Artech has to offer
            </motion.h1>

        <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >Tailored Services to Elevate Your Business
           </motion.h2>
       </div>
        <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
       <div className="home_our_services_cards_container">
        {/* first card */}
        <div className="home_our_services_card">
          <h2>Websites</h2>
          <MdWeb/>
          <Link to="/websites">Explore</Link>
        </div>
        {/* second card */}
        <div className="home_our_services_card">
          <h2>Marketing</h2>
          <FaAudioDescription />
          <Link to="/marketing">Explore</Link>
        </div>
        {/* third card */}
        <div className="home_our_services_card">
          <h2>Branding</h2>
          <FaTag />
         <Link to="/branding">Explore</Link>
        </div>
        {/* forth card */}
        <div className="home_our_services_card">
          <h2>All in one</h2>
          < FaBoxesStacked />
          <Link to="/plans">Explore</Link>
        </div>
       </div>
      </motion.div>
      </div>
      </motion.div>
    </div>
  )
}

export default Home_our_services