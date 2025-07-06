import "./Home_intro.css"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import home_intro_struggle from "../../../assets/images/home/home_intro_struggle.webp"

const Home_intro = () => {

  return (
    <div className="home_intro_background">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="home_intro_container">
          
          <div className="hone_intro_img_container">
            <img src={home_intro_struggle} alt="home intro image" />
          </div>

          <motion.div
            className="hone_intro_text_container"
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
            >
              Too Busy to Build a Website? Tired of Getting No Clients?
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              Tried templates but they look unprofessional? Your site’s slow, your socials are empty, and clients aren’t coming.
            </motion.p>

            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              We handle the tech, the design, and the marketing so you can focus on growing your business.
            </motion.h3>

           <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/contact" className="cta-link">Let's fix this</Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home_intro